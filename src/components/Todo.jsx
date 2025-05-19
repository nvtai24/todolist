import { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completed = todos.filter((item) => item.done).length;
  const total = todos.length;

  todos.sort((i1, i2) => i1.done - i2.done);

  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completed={completed} total={total} />
    </>
  );
}
