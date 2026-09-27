import { useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

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

  return (
    <div>
      <h1>Task Manager</h1>
      <p>Manage your tasks easily.</p>
      <p> Total Task : {tasks.length}</p>
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
     <ul style={{ listStyleType: "none", padding: 0 }}>
          {tasks.map((task,index) =>(
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