import { useState } from "react";
import Header from "../Header";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "DEFAULT",
      status: false
    }
  ]);
  const handleTaskCreate = (title) => {
    const payload = {
      title: title,
      status: false,
      id: todos.length + 1
    };
    setTodos([...todos, payload]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleToggle = (id) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <Header title="TODO" />
      <TodoInput onTaskCreate={handleTaskCreate} />
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            status={todo.status}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        );
      })}
    </>
  );
};

export default Todo;
