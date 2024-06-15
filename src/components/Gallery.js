import React, { useState } from 'react';
import Modal from 'react-modal';
import './Gallery.css';

const Gallery = () => {
    const photos = [
        '/1.png',
        '/2.png',
        '/3.png',
        '/4.png',
        '/5.png',
        '/6.png',
        'b.jpg',
        'c.jpg',
        'd.jpg',
        'e.jpg',
        'f.jpg',

    ];

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const openModal = (image) => {
        setCurrentImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setCurrentImage(null);
    };

    return (
        <div className="gallery-container">
            {photos.map((photo, index) => (
                <div key={index} className="gallery-item">
                    <img 
                        src={photo} 
                        alt={`Memory ${index + 1}`} 
                        className="gallery-image" 
                        onClick={() => openModal(photo)}
                    />
                    <div className="balloons">🎈🎈🎈</div>
                </div>
            ))}
            <Modal 
                isOpen={modalIsOpen} 
                onRequestClose={closeModal}
                style={{
                    content: {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '20px',
                        overflow: 'auto',
                        backgroundColor: '#fff0f5', // Light pink background for a birthday feel
                        borderRadius: '10px',
                        border: '2px solid #ff69b4', // Hot pink border
                    }
                }}
            >
                <div>
                    {currentImage && <img src={currentImage} alt="Current" className="modal-image" />}
                    <button onClick={closeModal} className="close-button">Close</button>
                </div>
            </Modal>
        </div>
    );
}

export default Gallery;
