import styles from "./Todo.module.css";

const TodoItem = ({ id, status, title, handleDelete, handleToggle }) => {
  return (
    <div className={styles.TodoItem}>
      <span className={styles.span}>{`${title} - ${status}`}</span>
      <button className={styles.deleteBtn} onClick={() => handleDelete(id)}>
        X
      </button>
      <button
        className={styles.toggleBtn}
        onClick={() => handleToggle(id)}
      ></button>
    </div>
  );
};

export default TodoItem;
