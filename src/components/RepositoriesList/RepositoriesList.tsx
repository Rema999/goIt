import React, { FC } from "react";
import styles from "./RepositoriesList.module.css"
import {ReactComponent as Star} from "../../assets/icons/star.svg";
import {ReactComponent as Person} from "../../assets/icons/person.svg";
import {IRepositoriesItems, Status} from "../../store/repositoriesSlice/types";
import {ReactComponent as Loader} from "../../assets/icons/loader.svg";

interface IPagination {
    repositoriesItems: IRepositoriesItems[]
    status: Status;
}

const RepositoriesList: FC<IPagination> = ({repositoriesItems = [], status}) => {

    if (status === Status.loading) {
        return <Loader className={styles.loader}/>
    }

    return <div>
        {
            repositoriesItems.map((item) => {
                return <div className={styles.wrapper} key={item.html_url}>
                    <div className={styles.leftContentWrapper}>
                        <img className={styles.image} src={item.owner.avatar_url} alt=""/>
                        <div className={styles.textWrapper}>
                            <a href={item.html_url} className={styles.repoName}>Repo name: {item.html_url}</a>
                            <p className={styles.textGrey}>Author: {item.owner.login}</p>
                            <p className={styles.textGrey}>Language: {item.language}</p>
                            <p className={styles.description}>Description: {item.description}</p>
                            <p></p>
                        </div>
                    </div>
                    <div className={styles.rightContentWrapper}>
                        <div className={styles.content}>
                            <Star/>{item.watchers}
                            <span className={styles.stars}>stars</span></div>
                        <div className={styles.content}>
                            <Person/>{item.watchers}
                            <span className={styles.watchers}>watchers</span>
                        </div>
                        <div></div>
                    </div>
                </div>
            })
        }
    </div>
}

export default RepositoriesList