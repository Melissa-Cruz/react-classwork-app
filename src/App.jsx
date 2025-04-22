import {useState} from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import tasks from "./data/tasks";


import { greeting, user } from "./data/constants";

function App() {
  const [myTasks, setMyTasks] = useState(tasks);
  const handleFormSubmit = (e) => {
    e.preventDefault();
  

    const newTask = {
      id:myTasks.length +1 , 
      title:e.target.taskName.value, 
      status: "In progress"
    };

    setMyTasks((prevTasks)=>[...prevTasks, newTask]);
  };

  return (
    <div>
      <h1>Hello React</h1>

      <p>
        {greeting} {user}
      </p>
      
      <TaskForm handleFormSubmit = {handleFormSubmit} />
      <TaskList tasks = {myTasks} />
    </div>
  );
}

export default App;
