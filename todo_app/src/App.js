import React, { useState } from "react";
import './App.css';

const App = () =>{
  const [userInput, setUserInput] = useState("")
  const [todos, setTodos] = useState([])

  const addData = () => {
    setTodos([...todos, userInput])
  }

  return <div className="div">
    <h1>Todo List</h1>
    <input  onChange={(event)=> setUserInput([event.target.value])} type="text"></input>
    <button  onClick={()=> addData()}>Add</button>
    <ul>
      {
        todos.map((todo)=> <li>{todo}</li>)
      }
    </ul>
  </div>
}

export default App;
