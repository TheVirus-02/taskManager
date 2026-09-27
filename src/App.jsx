import TaskForm from "./components/TaskForm";
import TaskStats from "./components/TaskStats";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";
import useTasks from "./hooks/useTasks";

function App() {

const {
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
} = useTasks();

  return (
    <div>
      <h1>Task Manager</h1>
      <p>Manage your tasks easily.</p>
      <TaskStats tasks={tasks} />
      <TaskForm
        task={task}
        setTask={setTask}
        handleSubmit={handleSubmit}
      />
      <TaskFilter
        filter={filter}
        setFilter={setFilter}
        />


    {tasks.length === 0 && (
      <p>No tasks yet. Add your First Task.</p>
    )}
    {
      tasks.length > 0 && filteredTasks.length === 0 &&(
        <p> No tasks found for this filter.</p>
      )}

    <TaskList
      filteredTasks={filteredTasks}
      editingTaskID={editingTaskID}
      editingTitle={editingTitle}
      setEditingTitle={setEditingTitle}
      toggleTask={toggleTask}
      startEditing={startEditing}
      deleteTask={deleteTask}
      saveEdit={saveEdit}
      cancelEdit={cancelEdit}
    />
     
      <button onClick={clearCompleted}>Clear Completed Task</button>
    </div>
  );
}

export default App;