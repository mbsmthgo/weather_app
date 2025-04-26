function ModalWindow(props) {

    function handleCrossClick() {
        props.setErrorMessage("")
    }

    return (
        <>
            {props.errorMessage ?
            <div className="modalBackground">
                <div className="modalActive">
                    <div className="modalClose">
                        <img src="src/assets/cross.svg" alt="cross" onClick={handleCrossClick}/>
                    </div>
                    <div className="modalWindow">
                        <h2>{props.errorMessage}</h2>
                    </div>
                </div>
            </div>
            : <></>}
        </>
    )

}

export default ModalWindow;