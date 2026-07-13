import Card from "./Card";

function Column({ title, cards,updateCard,deleteCard}) {
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
        />
      ))}
    </section>
  );
}

export default Column;