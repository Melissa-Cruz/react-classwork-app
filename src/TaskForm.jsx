function TaskForm(props) {
  return (
    <form onSubmit = {props.handleFormSubmit}>
      <label htmlFor="taskName">Task Name</label>
      <input 
        type="text" 
        id="taskName" 
        name="taskName" 
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TaskForm;
