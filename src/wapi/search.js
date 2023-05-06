import React,{useRef} from "react";

export default function Search(props){
    const SearchInput=useRef();
    return(
        <div  className ="btn btn-primary">
            <h3  className ="btn btn-info">Please enter the city name</h3><br/>
            <input   type="search" value={props.searchData} onChange={()=>props.eventHandler(SearchInput.current.value)} ref={SearchInput}/>
            <br/>
            <br/>
            <button  onClick={props.searchweather}><b>Search</b></button> 
        </div>
    ) 
}
