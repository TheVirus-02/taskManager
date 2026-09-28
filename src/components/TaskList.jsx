import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

function TaskList() {
  const { tasks, filteredTasks } = useContext(TaskContext);

  return (
    <section className="task-list-section">
      {tasks.length === 0 && (
        <p className="empty-state">No tasks yet. Add your first task above.</p>
      )}

      {tasks.length > 0 && filteredTasks.length === 0 && (
        <p className="empty-state">No tasks found for this filter.</p>
      )}

      {filteredTasks.length > 0 && (
        <ul className="task-list">
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default TaskList;
