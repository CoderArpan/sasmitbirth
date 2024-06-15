import React from 'react';
import './Messages.css';

const messages = [
    "Happy Birthday! 🎉🎂",
    "Wishing you a fantastic day! 🎈✨",
    "Here's to another amazing year! 🥳🍰",
    "May all your dreams come true! 🌟🎁",
];

const Messages = () => {
    return (
        <div className="messages-container">
            {messages.map((message, index) => (
                <div key={index} className="message-item">
                    {message}
                </div>
            ))}
        </div>
    );
}

export default Messages;
