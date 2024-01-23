import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem />
      <div class="row jd-row">
        <div class="col-6">Go to College</div>
        <div class="col-4">4/10/2023</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger jd-button">
            Delete
          </button>
        </div>
      </div>
      </div>
    </center>
  );
}

export default App;
