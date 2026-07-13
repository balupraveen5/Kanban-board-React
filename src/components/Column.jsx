import Card from "./Card";

function Column({ title, cards }) {
  return (
    <section>
      <h2>{title}</h2>

      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
        />
      ))}
    </section>
  );
}

export default Column;