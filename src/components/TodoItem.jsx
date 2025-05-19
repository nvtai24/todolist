import styles from "./TodoItem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete() {
    console.log(`Deleting item: ${item}`);
    const updatedTodos = todos.filter((todo) => todo !== item);
    setTodos(updatedTodos);
  }

  function handleClick() {
    let target = todos.find((todo) => todo.name === item.name);
    target.done = !target.done;
    setTodos([...todos]);

    event.target.classList.toggle(styles.completed);
  }

  return (
    <div className={styles.todoItem}>
      <div className={styles.itemTitle}>
        <span onClick={handleClick}> {item.name}</span>
        <span>
          <button className={styles.deleteButton} onClick={handleDelete}>
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
