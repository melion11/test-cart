
import s from './layout.module.css'
import {Header} from '../components/header/header';
import {Outlet} from 'react-router-dom';
export const Layout = () => {
    return (
        <div>
            <Header/>
            <div className={s.outletWrapper}>
                <Outlet/>
            </div>
        </div>
    );
};

