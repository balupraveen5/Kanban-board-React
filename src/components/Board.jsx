import Column from "./Column";
import styles from "./Board.module.css";

function Board({ cards, updateCard, deleteCard,moveCard }) {

  const columns = [
    {
      id: "todo",
      title: "Todo",
    },
    {
      id: "doing",
      title: "Doing",
    },
    {
      id: "done",
      title: "Done",
    },
  ];

  return (
    <div className={styles.board}>
      {columns.map((column) => (

        <Column
          key={column.id}
          title={column.title}
          cards={
            cards.filter(
              (card) => card.column === column.id
            )
          }
          updateCard={updateCard}
          deleteCard={deleteCard}
          moveCard={moveCard}
        />

      ))}
    </div>
  );
}

export default Board;