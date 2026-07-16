import Column from "./Column";
import styles from "./Board.module.css";

function Board({ cards, updateCard, deleteCard,moveCard,columns }) {

  // console.log(columns)

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