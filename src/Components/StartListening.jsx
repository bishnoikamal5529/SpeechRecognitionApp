
function StartListening(props){

    const {
        text,
        isListening,
        startListening,
        stopListening,
    } = props;

    return <div>
        <button className={isListening?"btn btn-success disabled": "btn btn-success"}  onClick={startListening}>
            Start Listening
        </button>
        <button className={isListening?"btn btn-danger":"btn btn-danger disabled"} onClick={stopListening}>
            Stop Listening
        </button>
        
         {isListening? <h5>Your Browser Is Currently Listening</h5>: null}

        <p>
            {text}
        </p>
    </div>
}

export default StartListening;