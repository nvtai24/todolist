import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button>Add</button>
      </form>
      <br />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      {console.log(todos)}
    </>
  );
}
