import Column from "./Column";

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
    <>
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
    </>
  );
}

export default Board;