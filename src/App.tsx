import React, { useState } from 'react';
import './styles/global.scss';
import { getCurrentTabUId } from './chrome/utils';
import { ChromeMessage, Sender } from './commons/index';
import useLocalStorage from 'hook';
import HistoryComponent from 'components/history';

export default function App() {

  const [showHistory, setHistory] = useState<boolean>(false)
  const [value, setValue] = useLocalStorage("mode", false)

  const sendTestMessage = () => {
    const currentMode = !value
    setValue(currentMode)
    const messageChorme: ChromeMessage = {
      from: Sender.React,
      message: { mode: currentMode },
    }
    getCurrentTabUId((id) => {
      id && chrome.tabs.sendMessage(
        id,
        { ...messageChorme, message: { ...messageChorme.message, id } },
        (_responseFromContentScript) => {
        });
    });
  };

  return (
    <div className="App">
      <div>
        <h1>Get Summarize Keyword</h1>
        <button onClick={sendTestMessage} className='mb-4 btn btn-primary'>{value ? "Disable" : "Enable"}</button>

        <button onClick={() => setHistory(!showHistory)} className='btn btn-primary'>Show History</button>
      </div>
      {showHistory && <HistoryComponent />}

    </div>
  );
}