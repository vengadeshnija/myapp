import React from "react";

export default function Result({WeatherData}){
    return(
        <div>
            <div>
                { 
                   WeatherData.length !== 0
                      ?
                    <>
            
                        <h2 >{WeatherData.name}</h2>
                        <div className ="btn btn-success">
                            <div >Feels like:{WeatherData.main.feels_like}</div>
                            <div>Max Temp:{WeatherData.main.temp_max}deg</div>
                            <div>Min Temp:{WeatherData.main.temp_min}deg</div>
                            <div>humidity:{WeatherData.main.humidity}</div>
                            <div>pressure:{WeatherData.main.pressure}</div>
                        
                        <div>
                        <div>
                                    <img src={`https://openweathermap.org/img/wn/${WeatherData.weather[0].icon}@2x.png`} alt="" />
                                </div>
                          <div>{WeatherData.weather[0].main}</div>
                        </div>
                        </div>    
                    </>
                    :
                    <>
                    <h3  className ="btn btn-info">Please enter the city name</h3>
                    </>
                }
            </div>
                      
                      
        </div>
            
        
        
    )
}