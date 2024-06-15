import React from 'react';
import './Timeline.css';

const events = [
    {year: '2015', event: 'Tu is School Aya'},
    { year: '2022-23', event: 'Started Class Of 9 We became bestFrind ' },
    { year: '2024', event: 'Now Best Friend To Abe Gandu' },
];

const Timeline = () => {
    return (
        <div className="timeline-container">
            <h2 className="timeline-title">Your Awesome Journey</h2>
            <div className="timeline">
                {events.map((item, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-year">{item.year}</div>
                        <div className="timeline-event">{item.event}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Timeline;
