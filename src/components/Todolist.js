import React, {useState} from 'react';

export default function Todolist(props) {

    const [itemIndex, setItemIndex] = useState(0);
    
    const deleteItem = (event) => {
        setItemIndex(event.target.value);
        props.todos.filter((todo, i) => i !== itemIndex)
        
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr><th>Date</th><th>Description</th></tr>
                {
                    
                    props.todos.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo.date}</td>
                            <td>{todo.desc}</td>
                            <td><button name="index" value={index} onClick={deleteItem}>Delete</button></td>
                        </tr>
                    
                        
                    )
                }
                </tbody>
            </table>
        </div>
    )

}