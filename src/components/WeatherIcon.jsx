import Clouds from "../assets/clouds.svg"
import Sun from "../assets/sun.svg"
import Rain from "../assets/rain.svg"
import Snow from "../assets/snow.svg"
import Mist from "../assets/mist.svg"
import Drizzle from "../assets/drizzle.svg"
function WeatherIcon(props) {
    const weatherStates = props.info.weather?.[0]?.main;
    if (weatherStates === "Clouds") {
        return (
            <Clouds className="weather-icon"></Clouds>
        )
    } else if (weatherStates === "Clear") {
        return (
            <Sun className="weather-icon"></Sun>
        )
    } else if (weatherStates === "Rain") {
        return (
            <Rain className="weather-icon"></Rain>
        )
    } else if (weatherStates === "Snow") {
        return (
            <Snow className="weather-icon"></Snow>
        )
    } else if (weatherStates === "Mist") {
        return (
            <Mist className="weather-icon"></Mist>
        )
    } else if (weatherStates === "Drizzle") {
        return (
            <Drizzle classname="weather-icon"/>
        )
    }
}
export default WeatherIcon;