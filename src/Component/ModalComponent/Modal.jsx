// Modal.js
import React from 'react';
import styles from "./Modal.module.css";
import { createPortal } from 'react-dom';

const Modal = ({ show, handleClose, children }) => {
  return (
    createPortal(
    <div className={`${styles.modal} ${show ? styles.show : ''}`}>
      <div className={styles.modal_content}>
        {children}
      </div>
    </div>, document.body
    )
  );
};

export default Modal;
