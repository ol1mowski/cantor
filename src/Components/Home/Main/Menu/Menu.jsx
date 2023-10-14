import style from './Menu.module.scss';

const Menu = () => {
    return (
        <>
            <section className={style.menuLoginSection}>
                <a className={style.menuLoginSection__a} href='/login'>
                    Zaloguj się
                </a>
                <a href='login'>
                    <button id={style.btn} className='btn btn-primary'>
                    Zarejestruj się za darmo
                </button>
                </a>
            </section>
            <section className={style.menuList}>
                    <span className={style.menuList__special}>Już dostępne!</span>
                    <h1>wdsws</h1>
                    <h1>wdsws</h1>
                    <h1>wdsws</h1>
                    <h1>wdsws</h1>
                    <h1>wdsws</h1>
                </section>
        </>
    )
}

export default Menu;