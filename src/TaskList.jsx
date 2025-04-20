import tasks from "./data/tasks";

function TaskList() {
  return (
    <div>
      {tasks.map((task) => (
        <ul key={task.id}>
          <li>Task: {task.title}</li>
          <li>Status: {task.status}</li>
        </ul>
      ))}
    </div>
  );
}

export default TaskList;
