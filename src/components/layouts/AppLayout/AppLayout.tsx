import {FC, ReactNode} from 'react';
import styles from './AppLayout.module.css';

interface IAppLayout {
    children: ReactNode;
}

const AppLayout: FC<IAppLayout> = ({children}) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
};

export default AppLayout;