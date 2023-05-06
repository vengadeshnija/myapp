import React from "react";
const spanstyle={
    fontsize:"80px",color:"red",fontWeight:"bolder"
}

 
function CounterDisplay(props)
{
    return(<>
    <h1>{props.discreption}</h1>
    <span style={spanstyle}>{props.value}</span>
    </>)
}

export default CounterDisplay;