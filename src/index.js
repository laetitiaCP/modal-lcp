import React from 'react';
import styles from './styles.module.css';

const Modal = ({ isOpen, onClose, children }) => {

  if (isOpen === false) {
    return null;
  }

  const close = (e) => {
    e.preventDefault();
    if (onClose) {
      onClose();
    }
  }

  return (
    <div>
      <div className={styles.modal}>
        <div className={styles.header}>
          <button onClick={onClose} className={styles.close}>&times;</button>
        </div>
        {children}
      </div>
      <div className={styles.bg} onClick={e => close(e)}></div>
    </div>
  )
}

export default Modal;
