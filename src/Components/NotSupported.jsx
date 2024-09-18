
function NotSupported(){

    return <div className=" min-vh-100 min-vw-100 d-flex justify-content-center align-items-center flex-column">
            <section className="h1"><span className="text-danger">Live</span>SpeechToText </section>

            <button className="btn btn-close-white shadow-lg pe-5 rounded-4 ps-4">
                Sorry, Your Browser Does Not Support Speech Recognition, Try Different Browser, Thanks
            </button>
            <p className=' container bg-body-secondary text-body-style m-5 rounded-4 text-dark-emphasis py-3 px-5 h5'>
            
            </p>
        </div>
  
}

export default NotSupported;