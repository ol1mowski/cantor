import style from './Header.module.scss';

const Header = () => {
    return (
        <>
            <header className={style.headerContainer}>
                <div className={style.headerContainer__img} ></div>
                <div className={style.headerContainer__right}>
                    <section className={style.headerContainer__menuBar}>
                        <div className={style.headerContainer__menuBar__wrapper}>
                            <div className={style.headerContainer__menuBar__wrapper__items}>
                                Usługi
                            </div>
                            <div className={style.headerContainer__menuBar__wrapper__items}>
                                Aktualności
                            </div> <div className={style.headerContainer__menuBar__wrapper__items}>
                                Portfel walutowy
                            </div>
                        </div>
                    </section>
                    <section className={style.headerContainer__loginSection}>
                        <div className={style.headerContainer__login}>
                            <a className={style.headerContainer__login__a} href='/login'>Zaloguj się</a>
                        </div>
                        <div className={style.headerContainer__register}>
                            <a className={style.headerContainer__register__a} href='/reg'>
                                <button className={style.headerContainer__register__btn}>
                                    Zarejestruj się za darmo
                                </button>
                            </a>
                        </div>
                    </section>
                    <nav className={style.headerContainer__menu}>
                        Menu
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;