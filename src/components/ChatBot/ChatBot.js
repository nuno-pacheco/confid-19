import React from "react";
import Chatbot from 'react-chatbot-kit';
import './ChatBot.css';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

function ChatBot() {
    return (
        <div className="container chatbotcontainer">
            <header className="ChatBot-top">
                <Chatbot className="chatbotProps" config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
            </header>
        </div>
    )
}

export default ChatBot