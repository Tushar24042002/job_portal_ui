// AlertContext.js

import React, { createContext, useContext, useState } from 'react';
import styles from "./Alert.module.css";

const AlertContext = createContext();

export const useAlert = () => {
  return useContext(AlertContext);
};

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type = 'success') => {
    setAlert({ message, type });

    setTimeout(() => {
      setAlert(null);
    }, 2000); // Hide alert after 2 seconds
  };

  const alertClassName = alert
    ? `alert alert-${alert.type}`
    : 'alert'; // Default alert class

  return (
    <AlertContext.Provider value={{ showAlert }}>
      <div className={`alert-container ${styles.alert}`}>
        {alert && (
          <div className={alertClassName}>
            {alert.message}
          </div>
        )}
      </div>
      {children}
    </AlertContext.Provider>
  );
};
