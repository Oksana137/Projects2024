import AddToDo from "./components/AddToDo";
import FilterComponent from "./components/FilterComponent";
import ToDoList from "./components/ToDoList";
import ToDoListContextProvider from "./contexts/ToDoListContext";

const App = () => {
  return (
    <ToDoListContextProvider>
      <div className="container mx-auto p-4">
        <AddToDo />
        <FilterComponent />
        <ToDoList />
      </div>
    </ToDoListContextProvider>
  );
};

export default App;
