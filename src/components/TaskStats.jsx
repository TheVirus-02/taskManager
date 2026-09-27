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
    <div>
      <p>Total: {total}</p>
      <p>Active: {active}</p>
      <p>Completed: {completed}</p>
    </div>
  );
}

export default TaskStats;