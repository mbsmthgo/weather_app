import './App.css'
import {useState} from 'react'
import WEATHER_API_KEY from "./utils/constant.js";

function App() {
    const [name, setName] = useState("")
    const [info, setInfo] = useState({})


    function handleNameChange(event) {
        setName(event.target.value)
        console.log(name)
    }

    function handleButtonClick() {
        fetchWeather(name)
    }

    function fetchWeather(address) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + address + "&units=metric&appid="+ WEATHER_API_KEY)
            .then(function (response) {
                return response.json()
            }).then(function (data) {
            console.log(data)
            setInfo(data)
        })

    }

    return (
        <div className="background">
            <div className="container">
                <h1>Weather Forecast</h1>
                <div className="container-searchbar">
                    <label>
                        <input
                            placeholder="Enter the city name"
                            value={name}
                            onChange={handleNameChange}/>
                    </label>
                    <button onClick={handleButtonClick}>Search</button>
                </div>
            </div>
            <div className="info">
                <img className="sun" src="src/sun.png" alt="Sun"/>
                <h1 className="city">{info.name}</h1>
                <h2 className="temp">{info.main?.temp}°C</h2>
                <div className="extra">
                    <p className="humidity">{info.main?.humidity}%</p>
                    <p className="wind">{info.wind?.speed} m/s</p>
                </div>
            </div>
        </div>
    )
}

export default App
