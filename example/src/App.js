import React, { useState } from 'react';

import Modal from 'modal-lcp'
import 'modal-lcp/dist/index.css'

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Cliquez ici</button>
      <Modal isOpen={isModalOpen} onClose={() => closeModal()}>
        <h2>TEST</h2>
      </Modal>
    </div>
  )
}

export default App
