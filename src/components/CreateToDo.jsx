import React,{useState} from 'react';
import ToDoList from './ToDoList';
import swal from 'sweetalert';

function CreateToDo() {

    const [todo, setTodo] = useState({title: "", done: false})
    const [todoArr, setTodoArr] = useState([])

    let todos = localStorage.hasOwnProperty("todos") 
    ? JSON.parse(localStorage.getItem("todos")) 
    : []

    const onChange = (event) => {
        let {value} = event.target
        let obj = {}
            obj["title"] = value
            obj["done"] = false
            setTodo(obj)
    }

    const CreateTodo = (event) => {
        const {name} = event.target
        if(event.key === "Enter" || name === "addTodo") {
            if(todo.title !== "") {
                todos.unshift(todo)
                localStorage.setItem("todos", JSON.stringify(todos))
                setTodo({title: "", done: false})
            } else {
                swal("Kindly write activity first", "error")
            }
        }
    }

    const completeTodo = (i) => {
        if(todos[i]["done"] !== true){
            todos[i]["done"] = true;
            localStorage.setItem("todos", JSON.stringify(todos))
            setTodoArr(todos)
            swal("Awesome!", "Todo Completed", "success");
        }
    }

    const deleteTodo = (i) => {
            swal({
                title: "Do you wish to proceed?",
                text: "Once deleted, you will not be able to recover this file",
                icon: "warning",
                buttons: true,
                dangerMode: true
            }).then(res => {
                if(res) {
                    todos.splice(i, 1)
                    localStorage.setItem('todos', JSON.stringify(todos))
                    setTodoArr(todos)
                }
            })
        }
    
  return (
    <>
    <div className='box'>
        <div className='text-end'>
            <h2>React ToDo App</h2>
            <h4>What do you want to do?</h4>
        </div>
        <div className='text-addToDo'>
            <input type='text' name='todo' placeholder='Add activity...' 
            value={todo.title} onKeyPress={CreateTodo} onChange={onChange}/>
            <button className='btn-addToDo' type='button' name='addToDo' onClick={CreateTodo}>Add ToDo</button>
        </div>
        </div>
    
    <ToDoList todoArr = {todoArr}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}/>
    </>
  )
}

export default CreateToDo 