import React from "react"
import '../counter.css'

class DoList extends React.Component{
    constructor(props)
    {
        super()
    }
    render()
    {
        console.log (this.props.doitem)
        return(
            <>
            
            <h1 className="text-success">DoList class</h1>
            {
                this.props.doitem.map((item)=>{
                    return (
                        <>{
                            item.deleted===false?(<>
                            <ul className="text-primary">
                    <li>{item.title}
                    <button id="button" className ="btn btn-success" onClick={()=>this.props.toggletTodo(item.id)}>done</button>
                    <button id="button" className="btn btn-danger" onClick={()=>this.props.deletedTodo(item.id)}>delete</button></li>
                    </ul>
                            </>) :<><p> data deleted</p></>
                        }</>
                    )
                })
                
            }
            </>
        )
    }
}

export default DoList;  
{/*"browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "gh-pages": "^5.0.0"
  }*/}