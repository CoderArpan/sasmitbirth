import React from 'react';

const Timeline = () => {
    const events = [
        {year: '2015', event: 'Tu is School Aya'},
        { year: '2022-23', event: 'Started Class Of 9 We became bestFrind ' },
        { year: '2024', event: 'Now Best Friend To Abe Gandu' },
        
        // Add more events
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h2>Timeline</h2>
            <ul>
                {events.map((item, index) => (
                    <li key={index}>
                        <strong>{item.year}</strong>: {item.event}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Timeline;
