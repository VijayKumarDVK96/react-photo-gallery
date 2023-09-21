// src/App.js
import React, { useState } from 'react';
import './App.css';
import images from './images';
import MasonryGrid from './components/MasonryGrid';
import { Modal } from 'react-responsive-modal'; 
import 'react-responsive-modal/styles.css';

function App() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <h1>React Gallery App</h1>
      <MasonryGrid images={images} openModal={openModal} />
      <Modal open={modalIsOpen} onClose={closeModal} center>
        <img src={images[selectedImageIndex]?.src} alt={images[selectedImageIndex]?.title} />
        <p>{images[selectedImageIndex]?.title}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default App;
