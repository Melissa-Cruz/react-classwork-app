
function TaskList(props) {
  return (
    <div>
      {props.tasks.map((task) => (
        <ul key={task.id}>
          <li>Task: {task.title}</li>
          <li>Status: {task.status}</li>
        </ul>
      ))}
    </div>
  );
}

export default TaskList;
