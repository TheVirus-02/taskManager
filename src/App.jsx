import { useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function handleSubmit(){
    event.preventDefault();

    const newTask = {
      id: Date.now(),
      title: task,
      completed: false,
    };
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
            }
        />
         <button type="submit"> Add task </button>
      </form>
     <ul>
          {tasks.map((task,index) =>(
            <li key={task.id}>{task.title}</li>
          )
        
        
        )}
          
     </ul>
    </div>
  );
}

export default App;