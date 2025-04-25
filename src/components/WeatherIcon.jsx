import Clouds from "../assets/clouds.svg"
import Sun from "../assets/sun.svg"
function WeatherIcon(props) {
    const weatherStates = props.info.weather?.[0]?.main;
    if (weatherStates == "Clouds") {
        return (
            <Clouds className="weather-icon"></Clouds>
        )
    } else if (weatherStates == "Clear") {
        return (
            <Sun></Sun>
        )
    }
}
export default WeatherIcon;