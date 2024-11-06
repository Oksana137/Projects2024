import ToDoItem from "./ToDoItem";
import { useContext } from "react";
import { ToDoListContext } from "../contexts/ToDoListContext";

const ToDoList = () => {
  const { todos, setTodos, filter, setFilter } = useContext(ToDoListContext);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed" && todo.completed) return true;
    if (filter === "active" && !todo.completed) return true;
    return false;
  });

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      const newState = prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default ToDoList;
