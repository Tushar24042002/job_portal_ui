import React from 'react';
import styles from "./CardComponent.module.css";

const CardComponent = ({children, style, onClick =null}) => {
  return (
    <div style={style} className={styles.card_component} onClick={onClick}>{children}</div>
  )
}

export default CardComponent