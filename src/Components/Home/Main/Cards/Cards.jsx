import { useEffect, useRef } from "react";
import Card from "./Card/Card";
import style from "./Cards.module.scss";
import { useSelector } from "react-redux";

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


  const cards = useRef(null);
  const click = useSelector((state) => state.showMenu.click); 

  useEffect(() => {

    cards.current.style.display = click ? 'none' : 'flex';

  }, [click, cards]);

  return (
    <>
      <div ref={cards} id={style.cardsWrapper} className="container text-center">
        <div id={style.gap} className="row row-cols-2">
          {CARDS_VALUES.map(item => <Card value={item.content} key={item.id} />)}
        </div>
      </div>
    </>
  );
};

export default Cards;
