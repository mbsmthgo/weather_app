import './App.css'
import {useState} from 'react'
import Search from "./components/Search.jsx";
import Display from "./components/Display.jsx";
import ModalWindow from "./components/ModalWindow.jsx";

function App() {
    const [info, setInfo] = useState(null)
    const [errorMessage, setErrorMessage] = useState("");
    return (
        <div className="background">
            <div className="container">
                <h1>Weather Forecast</h1>
                <Search setInfo={setInfo} setErrorMessage={setErrorMessage}></Search>
            </div>
            {info ? <Display info={info} >
            </Display> : <ModalWindow errorMessage={errorMessage} setErrorMessage={setErrorMessage}></ModalWindow>}
        </div>
    )
}

export default App
