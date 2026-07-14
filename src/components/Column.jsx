import Card from "./Card";
import styles from "./Column.module.css"
function Column({ title, cards,updateCard,deleteCard,moveCard}) {
  return (
    <section className={styles.column}>
      <h2 className={styles.title}>{title}</h2>

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