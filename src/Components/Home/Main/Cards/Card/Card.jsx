import style from './Card.module.scss';

const Card = props => {
    return (
        <>
            <div className={style.cardWrapper}>
                <div className={style.cardWrapper__card}>
                   {props.value} <span className={style.cardWrapper__dot}>.</span>
                </div>
            </div>
        </>
    )
}

export default Card;