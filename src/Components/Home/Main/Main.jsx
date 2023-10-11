import style from './Main.module.scss';
import animate from '../../../assets/animation.svg';
import Card from './Card/Card';

const Main = () => {
    return (
        <>
            <main className={style.mainContainer}>
                <h1 className={style.mainContainer__h1}>
                    Wielowalutowe usługi finansowe
                </h1>
                <p className={style.mainContainer__p}>
                    Zacznij oszczędzać czas i pieniądze.<br /> Skorzystaj z wygodnych usług walutowych.
                </p>
                <button className={style.mainContainer__button}>
                    Zarejestruj się za darmo
                </button>
                <img className={style.mainContainer__animate} src={animate} alt='animation' />
            </main>
            <Card />
        </>
    );
};

export default Main;