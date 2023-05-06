import React from "react";
import CounterDisplay from './CounterDisplay'
import { useState } from "react";
function Counter1()
{
    const [ count,setcount]=useState(0)
    
    const increment=()=>
    {
        setcount(count+1)
        //console.log(this.state.count)
    }
     const decrement=()=>
    {
        if(count>0)
        setcount(count-1)
        //console.log(this.state.count)
    }
    const reset=()=>
    {
        setcount(0)
    }
    return(
            <>
            <button className="btn btn-primary" onClick={increment}>+</button>
            <CounterDisplay value={count} discreption="it my app"></CounterDisplay>
            <button className="btn btn-primary" onClick={decrement}>-</button>
            <button className="btn btn-danger" onClick={reset}>reset</button>
            </>
        )

}

export default Counter1;