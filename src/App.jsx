import { useState } from 'react'
import Header from './components/Header';
import Board from './components/Board';

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

  return (
    <>
     <h1>Kanban-board</h1>
     <Header />
     <Board cards={cards} />
    </>
  )
}

export default App
