import { useState } from "react";
import styles from "./AddCardForm.module.css"

function AddCardForm({ onAddCard }) {
  // console.log("Rendering");
  // let title1="";
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [column, setColumn] = useState("todo");
  const [error, setError] = useState("");

  
  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === "") {
      setError("Title is required.");
      return;
    }

    const newCard = {
      id: crypto.randomUUID(),
      title: title,
      description,
      column,
    };

    onAddCard(newCard);

    setTitle("");
    setDescription("");
    setColumn("todo");
    setError("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>

      <h2>Add Card</h2>

      {error && <p>{error}</p>}

      <div>
        <label>Title</label>
        <br />
        <input
          className={styles.input}
          type="text"
          // value={title}
          onChange={(e) => {
            // title1=e.target.value;
            setTitle(e.target.value);
            setError("");
          }}
        />
      </div>

      <br />

      <div>
        <label>Description</label>
        <br />
        <textarea
          className={styles.textarea} 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Column</label>
        <br />
        <select
          className={styles.select}
          value={column}
          onChange={(e) => setColumn(e.target.value)}
        >
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
          <option value="done">Deploy</option>
        </select>
      </div>

      <br />

      <button
       className={styles.button}
       type="submit">Add Card</button>

    </form>
  );
}

export default AddCardForm;