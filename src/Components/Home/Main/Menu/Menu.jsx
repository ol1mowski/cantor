import style from './Menu.module.scss';
import MenuItems from './MenuItems/MenuItems';


const Menu = () => {

    const ITEMS_VALUE = [
        {
            id: 1,
            text: 'Karty wielowalutowe',
            adtional: null,
        },
        {
            id: 2,
            text: 'Wymiana walut',
            adtional: null,
        },
        {
            id: 3,
            text: 'Przekazy pieniężne',
            adtional: null,
        }, {
            id: 4,
            text: 'Płatności',
            adtional: null,
        }, 
        {
            id: 5,
            text: 'Invest&Forex',
            adtional: 'Usługa świadczona przez Conotoxia LTD',
        },
        {
            id: 6,
            text: 'Pożyczki',
            adtional: null,
        },
        {
            id: 7,
            text: 'Kryptowaluty',
            adtional: 'Nie oferujemy transakcji kryptowalutowych',
        }, 
        {
            id: 8,
            text: 'Biznes',
            adtional: null,
        },
    ]

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
                {ITEMS_VALUE.map(item =>  <MenuItems text={item.text} key={item.id} adtional={item.adtional}/>)}
            </section>
        </>
    )
}

export default Menu;