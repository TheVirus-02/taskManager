function TaskForm({ task, setTask, handleSubmit }) {
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

