import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const { task, setTask, handleSubmit, error} = useContext(TaskContext);
  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        aria-label="New task"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <button className="add-task-button" type="submit">Add task</button>
      {error && <p className="form-error">{error}</p>}
    </form>
  );
}

export default TaskForm;

