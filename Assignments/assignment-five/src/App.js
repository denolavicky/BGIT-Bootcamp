import React, { useState} from "react";
import axios from 'axios';

function App() {
  const [data,setData] = useState({})
  const[location,setLocation] = useState('')
  const searchLocation = (event) => {
    if (event.key !== 'Enter'){
    axios.get (url).then ((response) =>{
      setData(response.data)
        console.log(response.data)

    }
  
    )
    setLocation('')
  }
  }
  const url =`https://api.openweathermap.org/data/2.5/weather?=${location}&units=imperial&lat=35.6895&lon=139.6917&appid=594be29e90373e126113237b8ae9f140`

  

  return (
    <div className="app">
      <div className="search">
        <input
        id="locationInput"
        value={location}
        onChange={event => setLocation(event.target.value)}
        placeholder="Enter Location"
        onKeyPress={searchLocation}
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}F</h1> : null}
            
          </div>
          <div className="description">
             {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name != undefined &&

<div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like}F</p> : null}
            <p>Feels like</p>
          </div>
          <div className="Humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
        
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed}MPH</p>: null}
            <p>Wind Speed</p>
          </div>
        </div>


}
        
      </div>
    </div>
  );
}

export default App;
