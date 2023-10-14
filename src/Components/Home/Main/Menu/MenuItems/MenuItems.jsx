import style from './MenuItems.module.scss';
import arrow from '../../../../../assets/caret-right.svg';

const MenuItems = props => {
    return (
        <>
            <div className={style.menuList__items}>
                {props.text} <img src={arrow} alt='arrow' className={style.menuList__items__img} />
            </div>
            {props.adtional ? <div className={style.menuList__items__adtional}>{props.adtional}</div> : null}
        </>
    )
}

export default MenuItems;