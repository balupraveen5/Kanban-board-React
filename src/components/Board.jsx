import Column from "./Column";

function Board() {
  const todo = [
    { id: 1, title: "Learn React" },
    { id: 2, title: "Read Docs" },
  ];

  const doing = [
    { id: 3, title: "Build Project" },
  ];

  const done = [
    { id: 4, title: "Install Node" },
  ];

  return (
    <>
      <Column title="Todo" cards={todo} />

      <Column title="Doing" cards={doing} />

      <Column title="Done" cards={done} />
    </>
  );
}

export default Board;