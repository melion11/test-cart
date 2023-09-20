import {Card} from '../card/card';
import s from './home.module.css'

export const Home = () => {
    return (
        <div className={s.wrapper}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
};
