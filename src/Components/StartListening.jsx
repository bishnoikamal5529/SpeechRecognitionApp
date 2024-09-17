import { Container } from "react-bootstrap"

function StartListening(props){

    const {
        text,
        isListening,
        startListening,
        stopListening,
    } = props;

    return <Container>
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
    </Container>
}

export default StartListening;