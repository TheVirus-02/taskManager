import { useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");

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

  return (
    <div>
      <h1>Task Manager</h1>
      <p>Manage your tasks easily.</p>
      <p> 
        Total Task : {tasks.length} | Active Task : {tasks.filter((task)=>!task.completed).length} | Completed Task : {tasks.filter((task)=>task.completed).length}
      </p>
      <form onSubmit={handleSubmit}>
          <input type="text"
              onChange={
              (event) => {
                setTask(event.target.value)
              }
            } value={task}
        />
         <button type="submit"> Add task </button>
      </form>
      <div>
        <button onClick={()=> setFilter("all")}>All</button>
        <button onClick={()=> setFilter("active")}>Active</button>
        <button onClick={()=>setFilter("completed")}>Completed</button>
      </div>
     <ul style={{ listStyleType: "none", padding: 0 }}>
          {filteredTasks.map((task,index) =>(
            <li key={task.id}>
              <button onClick={
                () => toggleTask(task.id)}>
                {task.completed ? "✓" : "○"}
                {task.title}
              </button> 
              <button onClick={() => deleteTask(task.id)}>
                  Delete
              </button>
            </li>
          )
        
        
        )}
          
     </ul>
    </div>
  );
}

export default App;