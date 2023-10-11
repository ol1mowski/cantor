import style from './Header.module.scss';
import logo from '../../../assets/logo.svg';

const Header = () => {
    return (
        <>
            <header className={style.headerContainer}>
                <img className={style.headerContainer__img} src={logo} alt='logo' />
                <div className={style.headerContainer__right}>

                    <div className={style.headerContainer__login}>
                        <a className={style.headerContainer__login__a} href='/login'>Zaloguj się</a>
                    </div>
                    <nav className={style.headerContainer__menu}>
                        Menu
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;