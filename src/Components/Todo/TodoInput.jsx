import { useState } from "react";
import Button from "../Button";
import styles from "./Todo.module.css";

const TodoInput = ({ onTaskCreate }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    onTaskCreate(text);
  };

  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder="Add Task..."
        value={text}
        onChange={handleChange}
      />
      <Button title="+" onClick={handleClick} />
    </div>
  );
};

export default TodoInput;
