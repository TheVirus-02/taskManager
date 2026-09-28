import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskFilter(){
  const {filter, setFilter} = useContext(TaskContext);
return (
     <div className="filter-bar" aria-label="Task filter">
      <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>
        All
      </button>

      <button className={filter === "active" ? "active" : ""} onClick={() => setFilter("active")}>
        Active
      </button>

      <button className={filter === "completed" ? "active" : ""} onClick={() => setFilter("completed")}>
        Completed
      </button>
    </div>
);
}

export default TaskFilter;
