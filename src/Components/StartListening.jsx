import '../styles/basicStyles.css'

function StartListening(props){

    const {
        text,
        isListening,
        startListening,
        stopListening,
        clearText
    } = props;

    return <div className=" min-vh-100 min-vw-100 d-flex justify-content-center align-items-center flex-column">
        <section className="h1"><span className="text-danger">Live</span>SpeechToText </section>

        <button className="btn btn-close-white shadow-lg pe-5 rounded-4 ps-4" onClick={() => { return isListening ? stopListening() : startListening()}}>
            {isListening? 
            <article className='text-body-adjustment'><span className="text-danger">Stop Listening</span><svg className="svg-width-adjustment" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg> </article> : 
            <div className="text-primary text-body-adjustment">Start Listening <div> <svg className="svg-width-adjustment" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0040ff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z" stroke="#0040ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></div> </div>} 
        </button>
        <p className=' container bg-body-secondary text-body-style m-5 rounded-4 text-dark-emphasis py-3 px-5 h5'>
            {text}
        </p>
    </div>
}

export default StartListening;