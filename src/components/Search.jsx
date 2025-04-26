import {useState} from "react";
import WEATHER_API_KEY from "../utils/constant.js";

function Search(props) {
    const [name, setName] = useState("");

    function handleNameChange(event) {
        setName(event.target.value)
        console.log(name)
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            handleButtonClick()
        }
    }

    function handleButtonClick() {
        fetchWeather(name)
    }

    function fetchWeather(address) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + address + "&units=metric&appid=" + WEATHER_API_KEY)
            .then(function (response) {
                if (response.ok) {
                    return response.json()
                } else {
                     response.json()
                        .then(function (errorData) {
                            console.log(errorData.message)
                            props.setErrorMessage(errorData.message)
                        });

                }
            }).then(function (data) {
            props.setInfo(data)
        })
    }

    return (
        <div className="container-searchbar">
            <label>
                <input className="input"
                       placeholder="Enter the city name"
                       value={name}
                       onChange={handleNameChange}
                       onKeyPress={handleKeyPress}
                       spellCheck="false"/>
            </label>
            <button className="button" onClick={handleButtonClick}>Search</button>
        </div>
    )
}

export default Search;