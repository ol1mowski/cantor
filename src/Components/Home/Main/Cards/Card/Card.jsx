import style from "./Card.module.scss";

const Card = (props) => {
  return (
    <>
      <div id={style.card} className="col">{props.value}</div>
    </>
  );
};

export default Card;
