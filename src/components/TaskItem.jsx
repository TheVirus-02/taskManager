import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskItem({ task }) {
  const {
    editingTaskID,
    editingTitle,
    setEditingTitle,
    toggleTask,
    startEditing,
    deleteTask,
    saveEdit,
    cancelEdit,
  } = useContext(TaskContext);
  
  return editingTaskID === task.id ? (
    <li>
      <input
        type="text"
        value={editingTitle}
        onChange={(event) => setEditingTitle(event.target.value)}
      />

      <button onClick={saveEdit}>
        Save
      </button>

      <button onClick={cancelEdit}>
        Cancel
      </button>
    </li>
  ) : (
    <li>
      <button onClick={() => toggleTask(task.id)}>
        {task.completed ? "✓" : "○"} {task.title}
      </button>

      <button onClick={() => startEditing(task)}>
        Edit
      </button>

      <button onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;