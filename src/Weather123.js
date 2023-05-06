import React from "react";
import axios from "axios";
class weather extends React.Component{
    constructor(props){
        super()
        this.state={weather:[]}

    }
    componentDidMount=()=>{
        const url="https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=7472874efa66cef81926187d164bd518"
        axios.get(url).then((res)=>{console.log(res)
        this.setState(res.data.results)})
        .catch((err)=>console.log(err))        
    }
    render(){
        return(
            <>          
                
                   <input type="text" ></input>
                    <input type="button" value="search"></input>                   
                               
            </>)
            
        }
}
export default weather;