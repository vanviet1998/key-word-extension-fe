import { createContentChatGPT } from './../service/index';
import { ChromeMessage, Sender } from "../commons";
export type MessageResponse = (response?: any) => void
const validateSender = (
    message: ChromeMessage,
    sender: chrome.runtime.MessageSender
) => {
    return sender.id === chrome.runtime.id && message.from === Sender.React 
}

const messagesFromReactAppListener = (
    message: ChromeMessage,
    sender: chrome.runtime.MessageSender,
    response: MessageResponse
) => {

    const isValidated = validateSender(message, sender);
    if (isValidated) {
        response(window.getSelection().toString());
        if (message.message.mode) {
            window.addEventListener('mouseup', handlerFunction, false);
        }else{
            window.removeEventListener('mouseup', handlerFunction, false);
        }
    }

}
async function handlerFunction(event) {
        // If there is already a share dialog, remove it
        if (document.contains(document.getElementById("share-snippet"))) {
            document.getElementById("share-snippet").remove();
        }

        // Check if any text was selected
        if (window.getSelection().toString().length > 0) {
            // Get selected text and encode it
            const selection = window.getSelection();
            const range = selection.getRangeAt(0)
            if (range && !selection.isCollapsed) {
                if (selection.anchorNode.parentNode === selection.focusNode.parentNode) {
                    const span = document.createElement('span');
                    span.className = "my-tooltip highlight"
                    span.textContent = selection.toString();
                    const spanChil = document.createElement('span');
                    spanChil.className = 'my-tooltiptext';
                    spanChil.textContent = "loading....";
                    span.appendChild(spanChil)
                    selection.deleteFromDocument();
                    range.insertNode(span);
                    const res = await createContentChatGPT({ keyWord: window.getSelection().toString() })
                    spanChil.textContent = res.description;
                }
            }

        }
}


const main = () => {

    console.log('[content.ts] Main')
    /**
     * Fired when a message is sent from either an extension process or a content script.
     */
    chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
}

main();
