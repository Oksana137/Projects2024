import { createContext, useState } from "react";

export const ToDoListContext = createContext();

const ToDoListContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [filter, setFilter] = useState("all");

  return (
    <ToDoListContext.Provider value={{ todos, setTodos, filter, setFilter }}>
      {children}
    </ToDoListContext.Provider>
  );
};

export default ToDoListContextProvider;
