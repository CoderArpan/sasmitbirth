import React, { useEffect, useState } from 'react';
import './CurtainAnimation.css';

const CurtainAnimation = ({ onAnimationEnd }) => {
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationComplete(true);
            onAnimationEnd();
        }, 4000); // Duration of the animation

        return () => clearTimeout(timer);
    }, [onAnimationEnd]);

    return (
        <div className={`curtain-container ${animationComplete ? 'hidden' : ''}`}>
            <div className="curtain-left"></div>
            <div className="curtain-right"></div>
        </div>
    );
}

export default CurtainAnimation;
