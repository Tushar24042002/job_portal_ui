import React from 'react';
import styles from "./CardComponent.module.css";

const CardComponent = ({children, style}) => {
  return (
    <div style={style} className={styles.card_component}>{children}</div>
  )
}

export default CardComponent