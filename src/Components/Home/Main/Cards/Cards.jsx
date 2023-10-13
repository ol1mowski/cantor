import Card from "./Card/Card";
import style from "./Cards.module.scss";

const Cards = () => {
  const CARDS_VALUES = [
    {
      id: 1,
      content: "Karty Wielowalutowe",
    },
    {
      id: 2,
      content: "Wymiana walut",
    },
    {
      id: 3,
      content: "Przekazy pieniężne",
    },
    {
      id: 4,
      content: "Płatności",
    },
    {
      id: 5,
      content: "Invest & Forex",
    },
    {
      id: 6,
      content: "Pożyczki wielowalutowe",
    },
  ];

  return (
    <>
      <div id={style.cardsWrapper} className="container text-center">
        <div id={style.gap} className="row row-cols-2">
          {CARDS_VALUES.map(item => <Card value={item.content} key={item.id}/>)}
        </div>
      </div>
    </>
  );
};

export default Cards;
