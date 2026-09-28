import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskStats from "./components/TaskStats";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";
import ClearCompleted from "./components/ClearCompleted";

function App() {

  return (
    <div className="app">
      <header className="app-header">
        <p className="eyebrow">Personal workspace</p>
        <h1>Task Manager</h1>
        <p className="app-subtitle">Keep your day clear, focused, and moving.</p>
      </header>
      <main>
        <TaskStats />
        <TaskForm />
        <TaskFilter />
        <TaskList />
        <ClearCompleted />
      </main>
    </div>
  );
}

export default App;
