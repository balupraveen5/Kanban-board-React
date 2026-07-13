import { useState } from 'react'
import Header from './components/Header';
import Board from './components/Board';
import AddCardForm from './AddCardForm';
import { useTheme } from './context/ThemeContext';

function App() {
  
  const[cards,setCards]=useState([
        {
      id: crypto.randomUUID(),
      title: "Learn React",
      description: "Finish React basics",
      column: "todo",
    },
    {
      id: crypto.randomUUID(),
      title: "Read Hooks",
      description: "Study useState",
      column: "todo",
    },
    {
      id: crypto.randomUUID(),
      title: "Build Kanban",
      description: "Create project",
      column: "doing",
    },
    {
      id: crypto.randomUUID(),
      title: "Install Vite",
      description: "Setup project",
      column: "done",
    },

  ])

  function addCard(newCard){
    setCards(prev => [...prev,newCard])
  }

  function updateCard(updatedCard) {
  setCards((prevCards) =>
    prevCards.map((card) =>
      card.id === updatedCard.id ? updatedCard : card
    )
  );
 }

function deleteCard(id) {
  setCards((prevCards) =>
    prevCards.filter((card) => card.id !== id)
  );
}

  function moveCard(id, direction) {
  const columns = ["todo", "doing", "done"];

  setCards((prevCards) =>
    prevCards.map((card) => {
      if (card.id !== id) {
        return card;
      }

      const currentIndex = columns.indexOf(card.column);

      let newIndex = currentIndex;

      if (direction === "next" && currentIndex < columns.length - 1) {
        newIndex = currentIndex + 1;
      }

      if (direction === "previous" && currentIndex > 0) {
        newIndex = currentIndex - 1;
      }

      return {
        ...card,
        column: columns[newIndex],
      };
    })
  );
}
const { theme }= useTheme();

  return (
     <div className={theme}>
     <h1>Kanban-board</h1>
     <Header />
     <AddCardForm onAddCard={addCard} />
     <Board cards={cards} updateCard={updateCard}
     deleteCard={deleteCard}
     moveCard={moveCard}/>
    </div>
  );
}

export default App
