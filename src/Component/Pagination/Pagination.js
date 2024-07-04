import React from 'react';
import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, onChange = null }) => {


    const renderPages = () => {
        for (let i = 0; i < totalPages; i++) {
            return (
                <li class="page-item">
                    <div class="page-link">
                        {i + 1}
                    </div>
                </li>
            )
        }
    }
    console.log(renderPages)
    return (
        <div className="mt-3">
            <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                    <div class={`page-link ${currentPage < 2 ? styles.disabled : ""}`} onClick={currentPage > 1 && onChange}>Previous</div>
                </li>

                {
                    renderPages()
                }

                <li class="page-item disabled">
                    <div class={`page-link ${currentPage === totalPages ? styles.disabled : ""}`} onClick={currentPage === totalPages && onChange}>Next</div>
                </li>
            </ul>
        </div>
    )
}

export default Pagination