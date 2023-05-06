import React from "react"
import '../counter.css'
function DoList1(props)

{
   // const [doitem]=useState()
    return(
        
        
            <>            
            <h1 className="text-success">DoList class</h1>
            {
                props.doitem.map((item)=>{
                    return (
                        <>{
                            item.deleted===false?(<>
                            <ul className="text-primary">
                    <li>{item.title}
                    <button id="button" className ="btn btn-success" onClick={()=>props.toggletTodo(item.id)}>done</button>
                    <button id="button" className="btn btn-danger" onClick={()=>props.deletedTodo(item.id)}>delete</button></li>
                    </ul>
                    
                            </>) :<><p> data deleted</p></>
                        }</>
                    )
                })
                
            }
            </>
        )
   
    
       
    
}

export default DoList1;  
