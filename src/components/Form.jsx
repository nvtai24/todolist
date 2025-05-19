import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();

    if (todo.name.trim() === "") {
      alert("Please enter a valid todo item.");
      return;
    }

    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.todoInput}
          value={todo.name}
          placeholder="Enter something..."
          onChange={(e) => {
            setTodo({ name: e.target.value, done: false });
          }}
        />
        <button className={styles.addButton}>Add</button>
      </div>
    </form>
  );
}
