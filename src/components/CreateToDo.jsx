import React from 'react';
import ToDoList from './ToDoList';

function CreateToDo() {
  return (
    <>
    <div className='box'>
        <div className='text-end'>
            <h2>React ToDo App</h2>
            <h4>What do you want to do?</h4>
        </div>
        <div className='text-addToDo'>
            <input type='text' name='todo' placeholder='Add activity...'/>
            <button className='btn-addToDo' type='button' name='addToDo'>Add ToDo</button>
        </div>
        </div>
    
    <ToDoList/>
    </>
  )
}

export default CreateToDo 