  import React from 'react';
  import { useEffect, useState } from 'react';
import axios from 'axios';
function Weather(){
  const [search,setsearch]=useState("");
  const [weather,setWeather]=useState([]);

//   const setsearch=(e)=>{
//     // e.target.value;
//     e.target.value;
//     console.log('sss')
//  }
  const searchweatherHandler=()=>{
    if(search !==""){
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5e017f2524f71916bd4455ed68887c24&units=metric`)
      //axios.get("https:api.openweathermap.org/data/2.5/weather?q=${search}&appid=986f33bdf061bb9fab80a42b7df0602f")//
      .then(
        (response)=>{
          console.log(response.data);
          setWeather(response.data);
        }
      ).catch(
        (error)=>{
       console.log(error);
        }
      )
    }
  }

  useEffect(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5e017f2524f71916bd4455ed68887c24&units=metric`)
      //axios.get("https:api.openweathermap.org/data/2.5/weather?q=${search}&appid=986f33bdf061bb9fab80a42b7df0602f")//
      .then(
        (response)=>{
          console.log(response.data);
          setWeather(response.data);
        }
      ).catch(
        (error)=>{
       console.log(error);
        }
      )
  },[])
  return(
    <div>
      <div>
        {/* <form > */}
        <input type="search"  onChange={(e)=>setsearch(e.target.value)} value={search} />
        <button className ="btn btn-info" onClick={searchweatherHandler}> Search </button>
        {/* </form> */}

        <div>
        <div>
                { 
                   weather.length !== 0
                      ?
                    <>
            
                        <h2 style={{color:"black",fontStyle:""}}className="btn btn-secondary">{weather.name}</h2>
                        <div className ="btn btn-success">
                            <div>Feels like:{weather.main.feels_like}</div>
                            <div>Max Temp:{weather.main.temp_max}deg</div>
                            <div>Min Temp:{weather.main.temp_min}deg</div>
                            <div>humidity:{weather.main.humidity}</div>
                            <div>pressure:{weather.main.pressure}</div>
                        
                        <div>
                        <div>
                                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                                </div>
                          <div>{weather.weather[0].main}</div>
                        </div>
                        </div>    
                    </>
                    :
                    <>
                    <h3 className="btn btn-secondary">Please enter the city name</h3>
                    </>
                }
            </div>
            
        </div>

      </div>
      {/* <Search searchData={search} eventHandler={changeSearch} searchweather={searchweatherHandler} /> */}
      {/* <Result Weather={weather}/> */}
      </div>
  );
}

export default Weather;