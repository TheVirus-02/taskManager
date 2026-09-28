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
    <li className="task-item editing-task">
      <input
        type="text"
        value={editingTitle}
        onChange={(event) => setEditingTitle(event.target.value)}
        onKeyDown={(e) =>{
          if(e.key === "Enter"){
            saveEdit();
          }
          if(e.key === "Escape"){
            cancelEdit();
          }
        }}
      />

      <button className="save-button" type="button" onClick={saveEdit}>
        Save
      </button>

      <button className="cancel-button" type="button" onClick={cancelEdit}>
        Cancel
      </button>
    </li>
  ) : (
    <li className={`task-item ${task.completed ? "is-completed" : ""}`}>
      <button className="task-toggle" type="button" onClick={() => toggleTask(task.id)}>
        {task.completed ? "✓" : "○"} {task.title}
      </button>

      <button className="edit-button" type="button" onClick={() => startEditing(task)}>
        Edit
      </button>

      <button className="delete-button" type="button" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
