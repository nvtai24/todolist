import styles from "./TodoItem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete() {
    console.log(`Deleting item: ${item}`);
    const updatedTodos = todos.filter((todo) => todo !== item);
    setTodos(updatedTodos);
  }

  return (
    <div className={styles.todoItem}>
      <div className={styles.itemTitle}>
        {item.name}
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
