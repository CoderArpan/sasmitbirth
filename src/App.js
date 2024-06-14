import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Messages from './components/Messages';
import Timeline from './components/Timeline';
//import Video from './components/Video';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import './App.css';

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a network request or some asynchronous operation
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the time as needed

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Spinner message="Ruk ja MC itna kiya jaldi hai Ruk!!" />;
    }

    return (
        <div>
            <Header />
            <Gallery />
            <Messages />
            <Timeline />
           
            <Footer />
        </div>
    );
}

export default App;
