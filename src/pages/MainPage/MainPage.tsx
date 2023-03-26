import React, {useEffect, useState} from 'react';
import styles from "./MainPage.module.css"
import Pagination from "../../components/Pagination";
import {useSelector} from "react-redux";
import {repositoriesSelector} from "../../store/repositoriesSlice/selectors";
import {useAppDispatch} from "../../store";
import {getRepositories} from "../../store/repositoriesSlice/thunks";
import RepositoriesList from "../../components/RepositoriesList";

const MainPage = () => {
    const {repositories, status} = useSelector(repositoriesSelector);
    const dispatch = useAppDispatch();
    const [value, setValue] = useState("React");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(getRepositories({repositoriesName: value, pageNumber: currentPage}));

    }, [value, currentPage])
    const handleInputChange = (e: any) => {
        setValue(e.target.value);
    }

    return (
        <div className={styles.mainWrapper}>
            <input placeholder="Search" value={value} onChange={handleInputChange}
                   className={styles.input} type="text"/>
            {repositories?.items?.length ?
                <>
                    <RepositoriesList repositoriesItems={repositories?.items} status={status}/>
                    <Pagination totalPages={repositories?.total_count} getCurrentPage={setCurrentPage}/>
                </>
                : <p>По Вашому запиту не знайдено жодного репозиторія</p>}
        </div>
    );
};

export default MainPage;
