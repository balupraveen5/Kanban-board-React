import Card from "./Card";

function Column({ title, cards,updateCard,deleteCard,moveCard}) {
  return (
    <section>
      <h2>{title}</h2>

      {cards.map((card) => (
        <Card
          key={card.id}
          // title={card.title}
          // description={card.description}
          card={card}
          updateCard={updateCard}
          deleteCard={deleteCard}
          moveCard={moveCard}
        />
      ))}
    </section>
  );
}

export default Column;