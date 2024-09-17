import useSpeechRecognition from "../Hooks/useSpeechRecognitionHook";
import NotSupported from "./NotSupported";
import StartListening from "./StartListening";

function Home(){
    const {
        text,
        isListening,
        startListening,
        stopListening,
        hasRecognitionSupport
    } = useSpeechRecognition();

    return <>
        {hasRecognitionSupport? <StartListening text={text} isListening={isListening} startListening={startListening} stopListening={stopListening} /> : <NotSupported />}
    </>
}

export default Home;