import React from 'react';

const Messages = () => {
    const messages = [
        "Happy Birthday! Have a fantastic day!",
        "Wishing you all the best on your special day!",
        "Hope your birthday is as amazing as you are!"
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h2>Messages</h2>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
        </div>
    );
};

export default Messages;
