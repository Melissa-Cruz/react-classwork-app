import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Create two variables and assign some values to them
// Inside the <div> element with class "App", create an <h1> element and display these variables
const customer = "Jane Austin";
const location = "Doral, Florida";

// Create two variables and assign numbers
// Display all four operations and their answers
const orderPrice = 28;
const orderCount = 5;

// Create another variable and assign an object. This object will have fields for your name, your location, and a list of your favorite activities.
const user = {
  firstName:"Fitzwilliam",
  lastName: "Darcy",
  location:"Derbyshire, England",
  favoriteActivities: ["reading", "fishing", "walking", "riding"]

}

// Create an object named "cat" and have a field for color, number of kittens, and an image URL.
const cat = {
  color:"gray",
  numberOfKittens:5,
  imageURL:"https://bestfriends.org/sites/default/files/inline-images/Foster-Agave-1-byAnnika-Harley.jpg"  
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>{customer} is from {location}</h1>

        {/* Display all four operations and their answers */}
        <div>{orderPrice} x {orderCount} = {orderPrice*orderCount}</div>
        <div>{orderPrice} + {orderCount} = {orderPrice + orderCount}</div>
        <div>{orderPrice} - {orderCount} = {orderPrice - orderCount}</div>
        <div>{orderPrice} / {orderCount} = {orderPrice / orderCount}</div>

        {/* // Display a sentence that includes your name and location*/}
        <div>My first customer name is {user.firstName} and they are from {user.location} </div>
      
        {/* // Display the list of your activities in a <ul> as a list item (<li>)
          // Hint: Remember how you access elements of an array individually  */}
        <ul>
          <li>{user.favoriteActivities[0]}</li>
          <li>{user.favoriteActivities[1]}</li>
          <li>{user.favoriteActivities[2]}</li>

            {/* {user.favoriteActivities.map((activity)=><li>activity</li>)} */}
        </ul>

          {/* Display the image
          Display a sentence about the image using all the field
          Hint: you can use <figure>, <img> and <figcaption> tags */}
  

        <figure>
          <img src={cat.imageURL} alt="" />
          <figcaption> A {cat.color} cat is feeding its {cat.numberOfKittens} kittens</figcaption>        
        </figure>
        {/* Add a JSX comment with a comment in it
        */}
      </div>

    </>
  )
}

export default App


//Template code

{/* <a href="https://vite.dev" target="_blank">
<img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
<img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React</h1>
<div className="card">
<button onClick={() => setCount((count) => count + 1)}>
count is {count}
</button>
<p>
Edit <code>src/App.jsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p> */}