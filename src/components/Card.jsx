import { useState } from "react";
import styles from "./Card.module.css";
function Card({
  card,
  updateCard,
  deleteCard,
  moveCard,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState(card.title);

  const [description, setDescription] = useState(
    card.description
  );

  function handleSave() {
    if (title.trim() === "") {
      return;
    }

    updateCard({
      ...card,
      title,
      description,
    });

    setIsEditing(false);
  }

  function handleCancel() {
    setTitle(card.title);
    setDescription(card.description);
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <div className="card">
        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <br />

        <textarea
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <br />

        <button onClick={handleSave}>
          Save
        </button>

        <button onClick={handleCancel}>
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <h3>{card.title}</h3>

      <p>{card.description}</p>

      <button
      className={styles.button}
        onClick={() => setIsEditing(true)}
      >
        Edit
      </button>

      <button
        onClick={() =>
          deleteCard(card.id)
        }
      >
        Delete
      </button>

        {card.column !== "todo" && (
    <button onClick={() => moveCard(card.id, "previous")}>
      ⬅ Previous
    </button>
  )}

  {card.column !== "done" && (
    <button onClick={() => moveCard(card.id, "next")}>
      Next ➡
    </button>

  )}

    </div>
  );
}

export default Card;