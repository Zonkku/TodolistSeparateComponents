import React, {useState} from 'react';
import './App.css';
import Todotable from './components/Todolist';

function App() {
  const [todo, setTodo] = useState({desc:'', date:''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }
  
  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }
    

  return (
    <div className="App">
      <h1>Simple Todolist</h1>
      Add todo: 
      <br></br>
      <br></br>
      <form onSubmit={addTodo}>
      Description:
      <input type="text" name='desc' value={todo.desc} onChange={inputChanged}/>
      Date:
      <input type="date" name='date' value={todo.date} onChange={inputChanged}/>

      <input type='submit' value="Add"/>
      </form>
      <Todotable todos={todos}/>
      
    </div>
  );
}

export default App;
