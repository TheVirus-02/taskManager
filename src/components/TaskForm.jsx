import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const { task, setTask, handleSubmit } = useContext(TaskContext);
  return (
    <form onSubmit={handleSubmit}>
         <input 
            type="text"
            placeholder="What needs to be done?" 
            value={task}
            onChange={(event) => setTask(event.target.value)}
        />
         <button type="submit"> Add task </button >
    </form>
  );
}

export default TaskForm;

