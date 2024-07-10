import React from "react";
import PropTypes from "prop-types";
import styles from "./Table.module.css";

const Table = ({
  headers,
  data,
  rowClickable = false,
  clickFunction = null,
}) => {
  return (
    <>
      <div className={`table-responsive mt-4 ${styles.table_border}`}>
        <table className={`table`}>
          <thead className="table-light">
            <tr>
              {headers && headers.map((header, index) => (
                <th key={index}>{header["key"]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowClickable ? styles.clickable : ""}
                onClick={() => rowClickable && clickFunction(row)}
              >
                {headers.map(
                  (header, colIndex) => (
                    (<td key={colIndex}>{header["data"](row, rowIndex)}</td>)
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.array).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
