import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function ClearCompleted() {
  const { tasks, clearCompleted } = useContext(TaskContext);
  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <footer className="clear-completed">
      <button
        className="clear-completed-button"
        type="button"
        onClick={clearCompleted}
        disabled={completedCount === 0}
      >
        Clear completed <span>{completedCount}</span>
      </button>
    </footer>
  );
}

export default ClearCompleted;
