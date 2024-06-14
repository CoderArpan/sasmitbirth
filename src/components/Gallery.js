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
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {photos.map((photo, index) => (
                <img 
                    key={index} 
                    src={photo} 
                    alt={`Memory ${index + 1}`} 
                    style={{ margin: '10px', width: '200px', height: '200px', objectFit: 'cover', cursor: 'pointer' }} 
                    onClick={() => openModal(photo)}
                />
            ))}
            <Modal 
                isOpen={modalIsOpen} 
                onRequestClose={closeModal}
                style={{
                    content: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '20px',
                        overflow: 'auto',
                    }
                }}
            >
                <div>
                    {currentImage && <img src={currentImage} alt="Current" style={{ width: '100%', height: 'auto' }} />}
                    <button onClick={closeModal} style={{ display: 'block', margin: '20px auto', padding: '10px 20px', fontSize: '16px' }}>Close</button>
                </div>
            </Modal>
        </div>
    );
}

export default Gallery;
