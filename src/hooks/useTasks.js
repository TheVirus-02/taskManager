import { useState } from "react";

function useTasks() {
    // State 
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");

  const [editingTaskID, setEditingTaskID] = useState(null);// which task is being edited.
  const [editingTitle, setEditingTitle] = useState("");// new title will be typed.

    // Derived data
    const filteredTasks = tasks.filter((task) => {
  if (filter === "active") {
    return !task.completed;
  } 

  if (filter === "completed") {
    return task.completed;
  }

  return true;
});

// Functions
    function handleSubmit(event){
        event.preventDefault();

        if (!task.trim()) return;

        const newTask = {
            id: Date.now(),
            title: task,
            completed: false,
        };
    
        setTasks([...tasks, newTask]);
        setTask("");
    }

    function toggleTask(id) {
  setTasks(
    tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  );
}

function deleteTask(id) {
  setTasks(tasks.filter((task) => task.id !== id));
}

function clearCompleted(){
  setTasks(tasks.filter((task)=> !task.completed));
}

function startEditing(task){
  setEditingTaskID(task.id);
  setEditingTitle(task.title);
}


function saveEdit(){
  setTasks(
    tasks.map((task) => {
      if(task.id === editingTaskID){
        return {
          ...task,
          title : editingTitle,
        };
      }

      return task;
    })
  );

  setEditingTaskID(null);
  setEditingTitle("");
}

function cancelEdit(){
  setEditingTaskID(null);
  setEditingTitle("");
}


return {
    tasks,
    task,
    setTask,
    filter,
    setFilter,
    
    editingTaskID,
    editingTitle,
    setEditingTitle,

    filteredTasks,

    handleSubmit,
    toggleTask,
    deleteTask,
    clearCompleted,
    startEditing,
    saveEdit,
    cancelEdit,
  };
}

export default useTasks;