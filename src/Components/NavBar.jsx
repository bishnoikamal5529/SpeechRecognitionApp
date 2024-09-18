function NavBar(props){

    const { clearText } = props;

    return <nav className="navbar px-5 pt-3 shadow">
            <li className="nav-item list-unstyled text-dark-emphasis h3">
                <span className="text-danger h3">Live</span>SpeechToText 
            </li>

            <li className="nav-item list-unstyled text-dark-emphasis h3">
                <button className="btn btn-outline-danger h3 text-dark-emphasis px-4" onClick={clearText}>ClearText</button>
            </li>
    </nav>
}

export default NavBar;