import _ from "lodash";

import styles from '../styles/component_styles/Pagination.module.scss';



const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
    const pageCount = items / pageSize;
    if (Math.ceil(pageCount) === 1) return null;
    const pages = _.range(1, pageCount + 1);

    return (
        <>
            <nav className={styles.pagination}>
                <ul className={styles.pagination__list}>
                    {pages.map((page) => (
                        <li className={page === currentPage ? styles.page__item_active : styles.page__item} onClick={() => onPageChange(page)} key={page}>
                            <a className={styles.page__link} >{page}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Pagination;