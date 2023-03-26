import {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import styles from "./Pagination.module.css"

interface IPagination {
    getCurrentPage: (arg:number) => void
    totalPages?: number
}
const Pagination: FC<IPagination> = ({totalPages = 10, getCurrentPage}) => {
    const [currentPage, setCurrentPage] = useState(1);
    let items = [];
    let leftSide = currentPage - 2;
    if (leftSide <= 0) leftSide = 1;
    let rightSide = currentPage + 2;
    if (rightSide > totalPages) rightSide = totalPages;
    for (let number = leftSide; number <= rightSide; number++) {
        items.push(
            <div key={number} className={(
                number === currentPage
                ? `${styles.roundEffect} ${styles.active}`
                : `${styles.roundEffect}`
            )}
                 onClick={() => {
                     setCurrentPage(number)
                 }}>
                {number}
            </div>,
        );
    }
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    useEffect(() => {
        getCurrentPage(currentPage)
    }, [currentPage])

    const paginationRender = (
        <div className={styles.flexContainer}>
            <div className={styles.paginateCtn}>
                <div className={styles.roundEffect} onClick={prevPage}> Previous </div>
                {items}
                <div className={styles.roundEffect} onClick={nextPage}> Next </div>
            </div>
        </div>
    );
    return (paginationRender);
}

export default Pagination