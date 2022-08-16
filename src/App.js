import "./App.css";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  return (
    <div className="App">
      <h1>task manager</h1>
      <TaskList></TaskList>
      <AddTaskForm></AddTaskForm>
    </div>
  );
}

export default App;
