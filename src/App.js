import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Messages from './components/Messages';
import Timeline from './components/Timeline';
import Video from './components/Video';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import CurtainAnimation from './components/CurtainAnimation';
import FunkyParagraph from './components/FunkyParagraph';
import './App.css'; // Ensure this is included
import './index.css'; // Ensure this is included if you added the CSS there

const App = () => {
    const [loading, setLoading] = useState(true);
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        // Simulate a network request or some asynchronous operation
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the time as needed

        return () => clearTimeout(timer);
    }, []);

    const handleAnimationEnd = () => {
        setAnimationComplete(true);
    };

    if (loading) {
        return <Spinner message="Ruk ja bkl itna v kiya jaldi hai!" />;
    }

    return (
        <div>
            {!animationComplete && <CurtainAnimation onAnimationEnd={handleAnimationEnd} />}
            <Header />
            <Gallery />
            <Messages />
            <Timeline />
            {animationComplete && (
                <>
                    <FunkyParagraph />
                    <Video />
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;
