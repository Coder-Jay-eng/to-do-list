import React from 'react'

function ToDoList() {
  return (
    <div className='todo-list'>
        <ul>
            <li>
                <div>Shopping</div>
                <div className='icon'>
                    <i title='Complete' className='fas fa-check circle pointer'/>
                    <i title='Delete' className='fas fa-trash-alt pointer'/>
                </div>
            </li>
            <li>
                <div>Play</div>
                <div className='icon'>
                    <i title='Complete' className='fas fa-check circle pointer'/>
                    <i title='Delete' className='fas fa-trash-alt pointer'/>
                </div>
            </li>
            <li>
                <div>Sleep</div>
                <div className='icon'>
                    <i title='Complete' className='fas fa-check circle pointer'/>
                    <i title='Delete' className='fas fa-trash-alt pointer'/>
                </div>
            </li>
            <li>
                <div>Work out</div>
                <div className='icon'>
                    <i title='Complete' className='fas fa-check circle pointer'/>
                    <i title='Delete' className='fas fa-trash-alt pointer'/>
                </div>
            </li>
        </ul>
    </div>
  );
}

export default ToDoList