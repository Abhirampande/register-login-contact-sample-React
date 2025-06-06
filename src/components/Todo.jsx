import '../components/Todo.css';
import { MdCheck, MdDelete} from "react-icons/md";
import React, { useState } from 'react';
const Todo = () => {

    const[inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    const handleFormSubmit = (event)=> {
        event.preventDefault();

        if(!inputValue) return;

        if(todos.includes(inputValue)) {
            setInputValue("");
            
            return;
        }
        // Add the new todo to the list
        setTodos((prevTodos) => [
            ...prevTodos, inputValue]);

        setInputValue("");
    };

  return (
    <section className="todo">
        <header className="todo-header">
            <h1>Todo List</h1>
            <p>Manage your tasks efficiently</p>
        </header>
        <section className='form'>
            <form onSubmit={handleFormSubmit}>
                <div>
                <input type="text" placeholder="Add a new task" 
                className='todo-input'
                autoComplete='off'
                value={inputValue}
                onChange={(event) => handleInputChange(event.target.value)}
                />
                <button type="submit">Add</button>
                </div>
            </form> 
        </section>
        <section className='myUnorderedList'>
            <ul>{
               
                todos.map((todo, index) => {
                        return <li key={index} className='todo-item'>
                            <span>{todo}</span>
                            <button className='checkButton'>
                                <MdCheck></MdCheck>
                            </button>
                            <button className='deleteButton'>
                                <MdDelete></MdDelete>
                            </button>

                        </li>
                })
                 }
            </ul>

        </section>
    </section>
  )
}

export default Todo;