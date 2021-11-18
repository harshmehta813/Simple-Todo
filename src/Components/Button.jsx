import styles from "./Todo/Todo.module.css";
const Button = ({ title, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {" "}
    {title}{" "}
  </button>
);

export default Button;
