import {  useState, useEffect } from "react";
import { useRef } from "react";

let recognition = null;
if("webkitSpeechRecognition" in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";
}

const useSpeechRecognition = () => {
    const [text, setText] = useState(['']);
    const [isListening, setIsListening] = useState(false);
    const count = useRef(0);

    useEffect(() => {
        if(!recognition){ 
            return;
        }

        recognition.onresult = (event) =>{
            console.log("onresult event: ", event);
            let newText = event.results[count.current++][0].transcript;
            setText((text) => { return [...text, newText] });
        
        }
    }, []);

    const startListening = () =>{
        setText('');
        setIsListening(true);
        recognition.start();
    }

    const stopListening = () => {
        setIsListening(false);
        recognition.stop();
        count.current = 0;
    }

    return {
        text,
        isListening,
        startListening,
        stopListening,
        hasRecognitionSupport: !!recognition
    }
};

export default useSpeechRecognition;