import React from "react";
import { useState } from "react";
import DoList1 from "./DoList1";
import DoneList1 from "./DoneList1";
  function Todo1(props)
  {
    const [todoarr,setTodoarr]=useState(
      [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false,
          "deleted":false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false,
          "deleted":false
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false,
          "deleted":false
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true,
          "deleted":false
        },
        {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false,
          "deleted":false
        },
        {
          "userId": 1,
          "id": 6,
          "title": "qui ullam ratione quibusdam voluptatem quia omnis",
          "completed": false,
          "deleted":false
        },
        {
          "userId": 1,
          "id": 7,
          "title": "illo expedita consequatur quia in",
          "completed": false,
          "deleted":false
        },
        {
          "userId": 1,
          "id": 8,
          "title": "quo adipisci enim quam ut ab",
          "completed": true,
          "deleted":false
        },
        {
          "userId": 1,
          "id": 9,
          "title": "molestiae perspiciatis ipsa",
          "completed": false,
          "deleted":false
        },
        {
          "userId": 1,
          "id": 10,
          "title": "illo est ratione doloremque quia maiores aut",
          "completed": true,
          "deleted":false
        },
      ]
      
    )
    

    const getDoItem=()=>{
        return todoarr.filter((todo)=>todo.completed===false)
        //console.log(res)
      }
      const getDoneItem=()=>{
        return todoarr.filter((todo)=>todo.completed===true)
      }
      const toggletTodo=(todoid)=>{
        const temptodo=[todoarr]
        const todo=temptodo.find((todo)=>todo.id===todoid)
        todo.completed=!todo.completed;
        setTodoarr(temptodo)
      }
      const deletedTodo=(todoid)=>{
        const temptodo=[todoarr]
        const todo=temptodo.find((todo)=>todo.id===todoid)
        todo.deleted=true;
        setTodoarr(temptodo)
        console.log(temptodo)
  
      }
      return(
        <>
            <center><h1 className="text-info">Todo class</h1></center>
            <div className="row">
                <div className="col" ><DoList1 doitem={getDoItem()} toggletTodo={toggletTodo()} deletedTodo={deletedTodo}></DoList1></div>
                <div className="col"><DoneList1 doitem={getDoneItem()} toggletTodo={toggletTodo()} deletedTodo={deletedTodo}></DoneList1></div>
            </div>
            
            </>
        
      )
    
      
            
    
}

export default Todo1;

  
  