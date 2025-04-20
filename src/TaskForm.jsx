function TaskForm() {
  return (
    <form>
      <label htmlFor="taskName">Task Name</label>
      <input type="text" id="taskName" name="taskName" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TaskForm;
