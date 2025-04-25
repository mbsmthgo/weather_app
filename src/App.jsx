import './App.css'
import {useState} from 'react'
import WEATHER_API_KEY from "./utils/constant.js";
import Search from "./components/Search.jsx";
import Display from "./components/Display.jsx";

function App() {
    const [info, setInfo] = useState(null)
    return (
        <div className="background">
            <div className="container">
                <h1>Weather Forecast</h1>
                <Search setInfo={setInfo}></Search>
            </div>
            {info ? <Display info={info} >
            </Display> : <></>}
        </div>
    )
}

export default App
