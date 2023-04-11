export enum Sender {
    React,
    Content
}

export interface ChromeMessage {
    from: Sender,
    message: any
}

export interface IContentChatGPT{
    _id: string,
    keyWord: string,
    description: string,
    created: string,
    updated: string,
}

export interface CreateContentChatGPTRequest {
    keyWord: string
}
export interface CreateContentChatGPTReponse extends IContentChatGPT {
   
}