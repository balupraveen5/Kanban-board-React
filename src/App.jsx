import { useState } from 'react'
import "./App.css"
import Header from './components/Header';
import Board from './components/Board';
import AddCardForm from './AddCardForm';
import { useTheme } from './context/ThemeContext';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  
  const initialCards = [
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

  ]

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
    {
      id:"deploy",
      title:"deploy"
    }
  ];
  const[cards,setCards]=useLocalStorage("cards",initialCards);

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
  alert("are you sure")
  setCards((prevCards) =>
    prevCards.filter((card) => card.id !== id)
  );
}

const col= columns.map((c)=>{
  // if(c.id==="done")
  return c.id;
})
console.log(col);

function moveCard(id, direction) {


  setCards((prevCards) =>
    prevCards.map((card) => {
      if (card.id !== id) {
        return card;
      }

      const currentIndex = col.indexOf(card.column);
      console.log("curr->"+currentIndex)

      let newIndex = currentIndex;

      if (direction === "next" && currentIndex < columns.length - 1) {
        newIndex = currentIndex + 1;
      }

      if (direction === "previous" && currentIndex > 0) {
        newIndex = currentIndex - 1;
      }

      return {
        ...card,
        column: col[newIndex],
      };
    })
  );
}
const { theme }= useTheme();

  return (
     <div className={theme}>
     {/* <h1>Kanban-board</h1> */}
     <Header />
     <AddCardForm onAddCard={addCard} />
     <Board cards={cards} updateCard={updateCard}
     deleteCard={deleteCard}
     moveCard={moveCard}
     columns={columns}/>
    </div>
  );
}

export default App
