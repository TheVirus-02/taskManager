import TaskItem from "./TaskItem";

function TaskList({
  filteredTasks,
  editingTaskID,
  editingTitle,
  setEditingTitle,
  toggleTask,
  startEditing,
  deleteTask,
  saveEdit,
  cancelEdit,
}) {
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          editingTaskID={editingTaskID}
          editingTitle={editingTitle}
          setEditingTitle={setEditingTitle}
          toggleTask={toggleTask}
          startEditing={startEditing}
          deleteTask={deleteTask}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
        />
      ))}
    </ul>
  );
}

export default TaskList;