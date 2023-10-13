import { useEffect, useRef } from 'react';
import style from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setShow } from '../../../store';

const Header = () => {

    const menu = useRef(null);
    const click = useSelector((state) => state.showMenu.click);
    const dispatch = useDispatch();
    const header = useRef(null);
    
    useEffect(() => {
    
        const showMenuHandler = () => {
            dispatch(setShow());
            console.log(click);
        }

        header.current.style.display = click ? 'none' : 'flex';
    
        menu.current.addEventListener('click', showMenuHandler);
    
        return(() => {
            menu.current.removeEventListener('click', showMenuHandler);
        })
    
    }, [menu, click]);
    

    return (
        <>
            <header ref={header} className={style.headerContainer}>
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
                    <nav ref={menu} className={style.headerContainer__menu}>
                        Menu
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;