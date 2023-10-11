import Card from './Card/Card';
import style from './Cards.module.scss';

const Cards = () => {

    const CARDS_VALUES = [
        {
            id: 1,
            content: 'Karty Wielowalutowe'
        },
        {
            id: 2,
            content: 'Wymiana walut'
        },
        {
            id: 3,
            content: 'Przekazy pieniężne'
        },
        {
            id: 4,
            content: 'Płatności'
        },
        {
            id: 5,
            content: 'Invest & Forex'
        },
        {
            id: 6,
            content: 'Porzyczki wielowalutowe'
        },
    ]

    return (
        <>
            <div className={style.cardContainer}>
                {CARDS_VALUES.map((val) => <Card value={val.content} key={val.id}/>)}
            </div>
        </>
    );
};

export default Cards;