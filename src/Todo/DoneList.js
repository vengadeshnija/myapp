import React from "react"

class DoneList extends React.Component{
    constructor(props)
    {
        super()
    }
    render()    
    {
        return(
            <>
            <h1 className="text-warning">DoneList class</h1>
            {
                this.props.doitem.map((item)=>{
                    return (
                    <>{
                        item.deleted===false?(<>
                        <ul className="text-danger">
                    <li>{item.title}</li>
                    <button id="button" className ="btn btn-success" onClick={()=>this.props.toggletTodo(item.id)}>undo</button>
                    <button id="button" className="btn btn-danger" onClick={()=>this.props.deletedTodo(item.id)}>delete</button>
                    </ul>

                        </>):<><p> data deleted</p></>
                    }</>
                    )
                })
                
            }
            </>
        )
    }
}

export default DoneList;