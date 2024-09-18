import useSpeechRecognition from './Hooks/useSpeechRecognitionHook'
import NavBar from './Components/NavBar';
import StartListening from './Components/StartListening'
import NotSupported from './Components/NotSupported'

function App() {

  const {
    text,
    isListening,
    startListening,
    stopListening,
    clearText,
    hasRecognitionSupport
} = useSpeechRecognition();

return <>
    <NavBar clearText={clearText} />

    {hasRecognitionSupport? <StartListening text={text} isListening={isListening} startListening={startListening} stopListening={stopListening} clearText={clearText} /> 
                            : <NotSupported />}
</>
}

export default App
