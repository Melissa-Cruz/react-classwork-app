import users from "./data/users";
import todos from "./data/todos";

console.log("users :>> ", users);
console.log("todos :>> ", todos);


function App() {
  const items = ["seltzer", "coke zero", "chocolate", "kiwi"];
  

  return (
    <div>
      <h1>Hello React</h1>
      <Users/>
      <Todos/>
      <h2>Classwork P3</h2>
      <ShoppingListForm/>
      <ShoppingList/>
    </div>
  );
}

function Users() {
  return (
    <div>
      <h2>Users</h2>
      {users.map((user)=> (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>
            Email: <a href = {`mailto:${user.email}`}>{user.email}</a>
          </p>
          <address>
            Address: 
            {user.address.street}, {user.address.city}, {user.address.zipcode}
          </address>
          <p>Company: {user.company.name} </p>
          <p>Website: <a href={user.website}>{user.website}</a></p>
        </div>
      ))
}
    </div>  
  )
}

function Todos() {
  return(
    <div>
      <h2>To Dos</h2>
      {todos.map((todo)=>(
        <ul key={todo.id}>
          <li>Item:{todo.title}</li>
          <li>Status: {todo.completed ? "Completed" : "In progress" }</li>
        </ul>
          

      ))}



    </div>
  )
}


function ShoppingListForm (){
  const handleItemNameChange = (event)=>{
    console.log(event)
  };

  const handleFormSubmit = (event)=>{
    console.log(event)
  };

  return(

    <div>
      <form>
        <h2>Shopping List Form</h2>
        <label></label>
        <input
        type ="text"
        id="item"
        name="item"
        onChange={handleItemNameChange}
        />
        <button type="submit" onSubmit={handleFormSubmit}>Submit</button>

      </form>
    </div>
  )
}

function ShoppingList(){
  return(
  <ul>
    {items.map((item)=>(
      <li>{item}</li>

    ))
    }
  </ul>
  )
}




export default App;
