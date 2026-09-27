import TaskForm from "./components/TaskForm";
import TaskStats from "./components/TaskStats";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";
import ClearCompleted from "./components/ClearCompleted";

function App() {

  return (
    <div>
      <h1>Task Manager</h1>
      <p>Manage your tasks easily.</p>
      <TaskStats />
      <TaskForm />
      <TaskFilter />
      <TaskList />
      <ClearCompleted />
    </div>
  );
}

export default App;