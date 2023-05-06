import React from "react"
function DoneList1(props)

{
    //const [doitem]=useState()

    return(
        
            
                <>
                <h1 className="text-warning">DoneList class</h1>
                {
                    props.doitem.map((item)=>{
                        return (
                        <>{
                            item.deleted===false?(<>
                            <ul className="text-danger">
                        <li>{item.title}</li>
                        <button id="button" className ="btn btn-success" onClick={()=>props.toggletTodo(item.id)}>undo</button>
                    <button id="button" className="btn btn-danger" onClick={()=>props.deletedTodo(item.id)}>delete</button>
                    
                        </ul>
    
                            </>):<><p> data deleted</p></>
                        }</>
                        )
                    })
                    
                }
                </>
            )
        }
       
    


export default DoneList1;