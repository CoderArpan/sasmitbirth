import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Messages from './components/Messages';
import Timeline from './components/Timeline';
import Video from './components/Video';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import CurtainAnimation from './components/CurtainAnimation';
import './App.css';

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
        return <Spinner message="Please wait, we are preparing a special birthday surprise!" />;
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
                    <Video />
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;
