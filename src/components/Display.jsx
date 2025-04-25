import WeatherIcon from "./WeatherIcon.jsx";

function Display(props) {
    return (
        <div className="info">
                <WeatherIcon info={props.info}></WeatherIcon>
                <h1 className="city">{props.info?.name}</h1>
                <h2 className="temp">{Math.round(props.info?.main?.temp)}°C</h2>
                <div className="extra">
                    <p className="humidity">
                        <img className="humidity" src="src/assets/humidity.svg" alt="Humidity"/>
                        {props.info?.main?.humidity}%
                    </p>
                    <p className="wind">
                        <img className="wind" src="src/assets/wind.svg" alt="Wind speed"/>
                        {props.info?.wind?.speed} m/s
                    </p>
                </div>
                </div>
            )
            }

            export default Display;