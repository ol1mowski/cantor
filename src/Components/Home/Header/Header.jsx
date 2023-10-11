import style from './Header.module.scss';

const Header = () => {
    return (
        <>
            <header className={style.headerContainer}>
                <div className={style.headerContainer__img} ></div>
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