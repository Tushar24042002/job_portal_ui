import React, { useContext } from "react";
import { LoadingContext } from "../../Context/LoaderContext"; 
import { createPortal } from 'react-dom';
import styles from "./Loader.module.css";

const Loader = () => {
  const { loading } = useContext(LoadingContext);

  if (!loading) return null;

  return (
    <div className="loader">
        {
            createPortal( <div className={styles.spinner}><div className={styles.loader}><span className={styles.context}></span></div> </div>, document.body)
        }
     
    </div>
  );
};

export default Loader;
