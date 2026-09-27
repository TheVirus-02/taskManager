import { createContext } from "react";
import useTasks from "../hooks/useTasks";

const TaskContext = createContext();

function TaskProvider({ children }) {
  const taskData = useTasks();

  return (
    <TaskContext.Provider value={taskData}>
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };