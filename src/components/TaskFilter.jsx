import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskFilter(){
  const {filter, setFilter} = useContext(TaskContext);
return (
     <div>
      <button onClick={() => setFilter("all")}>
        All
      </button>

      <button onClick={() => setFilter("active")}>
        Active
      </button>

      <button onClick={() => setFilter("completed")}>
        Completed
      </button>
    </div>
);
}

export default TaskFilter;