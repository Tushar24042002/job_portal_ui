import React from 'react';
import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, onChange = null }) => {


    const renderPages = () => {
        for (let i = 0; i < totalPages; i++) {
            return (
                <li className="page-item">
                    <div className="page-link">
                        {i + 1}
                    </div>
                </li>
            )
        }
    }
    return (
        <div className="mt-3">
            <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                    <div className={`page-link ${currentPage < 2 ? styles.disabled : ""}`} onClick={currentPage > 1 ? onChange : null}>Previous</div>
                </li>

                {
                    renderPages()
                }

                <li className="page-item disabled">
                    <div className={`page-link ${currentPage === totalPages ? styles.disabled : ""}`} onClick={currentPage === totalPages ?  onChange : null}>Next</div>
                </li>
            </ul>
        </div>
    )
}

export default Pagination