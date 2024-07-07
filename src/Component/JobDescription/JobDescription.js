import React from 'react';
import styles from "./JobDescription.module.css";

const  JobDescription = ({data}) => {
  console.log(data)
  return (
    <div className={styles.jd} dangerouslySetInnerHTML={{ __html: data }} />
  )
}

export default JobDescription