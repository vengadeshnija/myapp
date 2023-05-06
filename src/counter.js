 import React from "react";
import CounterDisplay from "./CounterDisplay";
import"./counter.css"
class Counter extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={count:0}
    }
    increment=()=>
    {
        this.setState({count:this.state.count+1})
        console.log(this.state.count)
    }
    decrement=()=>
    {
        if(this.state.count>0)
        this.setState({count:this.state.count-1})
        console.log(this.state.count)
    }
    reset=()=>
    {
        this.setState({count:0})
    }
    render()
    {
        return(
            <>
            <button className="btn btn-primary" onClick={this.increment}>+</button>
            <CounterDisplay value={this.state.count} discreption="it my app"></CounterDisplay>
            <button className="btn btn-primary" onClick={this.decrement}>-</button>
            <button className="btn btn-danger" onClick={this.reset}>reset</button>
            </>
        )
    }
}
export default Counter;