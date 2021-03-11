import React, {useState} from 'react';
import Todotable from './Todotable';

    function Todolist(props) {
        const [todo, setTodo] = useState({desc:'', date:''});
        const [todos, setTodos] = useState([]);
      
        const inputChanged = (event) => {
          setTodo({...todo, [event.target.name]: event.target.value});
        }
        
        const addTodo = (event) => {
          event.preventDefault();
          setTodos([...todos, todo]);
        }
      
  
        const deleteItem = (index) => {
            console.log(index)
            setTodos(todos.filter((todo, i) => i !== index))
            
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
                <Todotable todos={todos} deleteItem={deleteItem}/>
            </div>
        )

}

export default Todolist;