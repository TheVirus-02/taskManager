import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

function TaskList() {
  const { tasks, filteredTasks } = useContext(TaskContext);

  return (
    <>
      {tasks.length === 0 && (
        <p>No tasks yet. Add your First Task.</p>
      )}

      {tasks.length > 0 && filteredTasks.length === 0 && (
        <p>No tasks found for this filter.</p>
      )}

      {filteredTasks.length > 0 && (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </>
  );
}

export default TaskList;