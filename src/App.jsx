import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

import { greeting, user } from "./data/constants";

function App() {
  return (
    <div>
      <h1>Hello React</h1>

      <p>
        {greeting} {user}
      </p>
      
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
