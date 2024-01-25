import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitems from "./components/Todoitems";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name:"Go College",
      dueDate: "4/10/2023",
    }
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <Todoitems todoItems={todoItems}/>
    </center>
  );
}

export default App;
