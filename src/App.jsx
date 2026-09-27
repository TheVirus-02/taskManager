import { useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingTaskID, setEditingTaskId] = useState(null); // which task is being edited.
  const [editingTitle, setEditingTitle] = useState(""); // new title will be typed.

  function handleSubmit(event){
    event.preventDefault();

     if (!task.trim()) return;

   setTasks([...tasks, {
    id: Date.now(),
    title: task.trim(),
    completed: false,
  }]);
    setTask("");
}

  function toggleTask(id) {
  setTasks(
    tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    })
  );
}

function deleteTask(id) {
  setTasks(tasks.filter((task) => task.id !== id));
}

function getFilteredTasks(){
  if(filter === "active"){
    return tasks.filter((task)=>!task.completed)
  }

  if(filter === "completed"){
    return tasks.filter((task)=>task.completed)
  }

  return tasks;
}
const filteredTasks = getFilteredTasks();

function clearCompleted(){
  setTasks(tasks.filter((task)=> !task.completed));
}

function startEditing(task){
  setEditingTaskId(task.id);
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

  setEditingTaskId(null);
  setEditingTitle("");
}

function cancelEdit(){
  setEditingTaskId(null);
  setEditingTitle("");
}

  return (
    <div>
      <h1>Task Manager</h1>
      <p>Manage your tasks easily.</p>
      <p> 
        Total Task : {tasks.length} | Active Task : {tasks.filter((task)=>!task.completed).length} | Completed Task : {tasks.filter((task)=>task.completed).length}
      </p>
      <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={task}
            onChange={(event) => setTask(event.target.value)}
        />
         <button type="submit"> Add task </button >
      </form>
      <div>
        <button onClick={()=> setFilter("all")}>All</button>
        <button onClick={()=> setFilter("active")}>Active</button>
        <button onClick={()=>setFilter("completed")}>Completed</button>
        <button onClick={clearCompleted}>Clear Completed Task</button>
      </div>
    

     <ul style={{ listStyleType: "none", padding: 0 }}>
          {filteredTasks.map((task) =>(
             editingTaskID === task.id ? (
            <li key={task.id}>
              <input 
                type="text"
                value={editingTitle}
                onChange={(event) => setEditingTitle(event.target.value)}  
              />

              <button onClick={saveEdit}>Save</button>
              <button onClick={cancelEdit}> Cancel Edit</button>
              </li>
      ) : (
          <li key={task.id}>

              <button onClick={
                () => toggleTask(task.id)}>
                {task.completed ? "✓" : "○"}
                {task.title}
              </button> 

              <button onClick={() => startEditing(task)}>
                Edit
              </button>

              <button onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </li>

      )
    ))}
          
     </ul>
    </div>
  );
}

export default App;