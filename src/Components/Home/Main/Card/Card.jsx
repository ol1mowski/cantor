import style from './Card.module.scss';

const Card = () => {
    return (
        <>
            <div className={style.cardContainer}>
                <div className={style.cardWrapper}>
                    <div className={style.cardWrapper__card}>
                        Karty Wielowalutowe <span className={style.cardWrapper__dot}>.</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;