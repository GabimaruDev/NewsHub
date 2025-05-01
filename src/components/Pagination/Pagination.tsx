import { FC } from "react";
import styles from "./styles.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePrevPage: () => void;
  handlePageClick: (pageNumber: number) => void;
  handleNextPage: () => void;
}

const Pagination: FC<PaginationProps> = (props) => {
  const { currentPage, totalPages, handlePrevPage, handlePageClick, handleNextPage } = props;

  return (
    <div className={styles.pagination}>
      <button disabled={currentPage <= 1} onClick={handlePrevPage} className={styles.button}>
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              disabled={currentPage === index + 1}
              onClick={() => handlePageClick(index + 1)}
              className={styles.button}
              key={index}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button disabled={currentPage === totalPages} onClick={handleNextPage} className={styles.button}>
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
