import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskStats() {
  const { tasks } = useContext(TaskContext);

  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const active = tasks.filter(
    (task) => !task.completed
  ).length;

  return (
    <section className="task-stats" aria-label="Task summary">
      <div className="stat-card">
        <span>Total</span>
        <strong>{total}</strong>
      </div>
      <div className="stat-card active-stat">
        <span>Active</span>
        <strong>{active}</strong>
      </div>
      <div className="stat-card completed-stat">
        <span>Completed</span>
        <strong>{completed}</strong>
      </div>
    </section>
  );
}

export default TaskStats;
