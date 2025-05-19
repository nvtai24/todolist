import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.todoList}>
      {todos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
