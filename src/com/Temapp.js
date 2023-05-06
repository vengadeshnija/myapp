import React from "react";
import Search from "./search";
import Result from "./result";
import {useState, useEffect} from "react"
import axios from "axios";
function Weatherapi() {
    
return (

    <>
    <div >
     
     <Search  searchData={search} eventHandler={changeSearch} searchweather={searchweatherHandler} />
     <Result WeatherData={weather}/>
     </div>
     
    </>
)
}
export default Weatherapi;