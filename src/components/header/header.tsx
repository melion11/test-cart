import s from './header.module.css'
import {Button} from '../ui/button/button';
import {Link} from 'react-router-dom';
import {Icon} from '../ui/icon/icon';

export const Header = () => {
    return (
        <header className={s.wrapper}>
                <div className={s.logo}>
                    <Link to={'/'}>SneakerHead</Link>
                </div>

                <Link className={s.cartLink} to={'/cart'}>
                    <Icon svgId={'cart'}/>
                    <span>0.00 BYN</span>
                </Link>
        </header>
    );
};

