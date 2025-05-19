import styles from "./Footer.module.css";

export default function Footer({ completed, total }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed: {completed}</span>
      <span className={styles.item}>Total: {total}</span>
    </div>
  );
}
