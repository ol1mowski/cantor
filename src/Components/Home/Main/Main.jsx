import style from './Main.module.scss';
import animate from '../../../assets/animation.svg';
import Cards from './Cards/Cards';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import x from '../../../assets/x.svg';
import { setShow } from '../../../store';

const Main = () => {
    const main = useRef(null);
    const click = useSelector((state) => state.showMenu.click);
    const closeMenu = useRef(null); // Ref dla elementu DOM, który jest później przypisany do x.svg
    const dispatch = useDispatch();
    
    useEffect(() => {
        main.current.style.display = click ? 'none' : 'flex';
        
        const closeMenuHandler = () => {
            dispatch(setShow());
        }
    
        if (closeMenu.current) {
            closeMenu.current.addEventListener('click', closeMenuHandler);
        }
    
        return(() => {
            if (closeMenu.current) {
                closeMenu.current.removeEventListener('click', closeMenuHandler);
            }
        })
    
    }, [click, main]);
    

    return (

        <>
            {click ? <div className={style.menu}>
                <img ref={closeMenu} className={style.menu__x} src={x} alt='close menu' />
                <h1>
                    menu
                </h1>
            </div> : null}
            <main ref={main} className={style.mainContainer}>
                <section className={style.mainContainer__contentContainer}>
                    <h1 className={style.mainContainer__h1}>
                        Wielowalutowe usługi finansowe
                    </h1>
                    <p className={style.mainContainer__p}>
                        Zacznij oszczędzać czas i pieniądze.<br /> Skorzystaj z wygodnych usług walutowych.
                    </p>
                    <button className={style.mainContainer__button}>
                        Zarejestruj się za darmo
                    </button>
                </section>
                <img className={style.mainContainer__animate} src={animate} alt='animation' />
            </main>
            <Cards />
        </>
    );
};

export default Main;