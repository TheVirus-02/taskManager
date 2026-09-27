import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function ClearCompleted() {
  const { clearCompleted } = useContext(TaskContext);

  return (
    <button onClick={clearCompleted}>
      Clear completed
    </button>
  );
}

export default ClearCompleted;