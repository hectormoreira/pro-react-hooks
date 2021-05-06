import React, { useContext } from 'react';
import {ThemeContext} from '../context/ThemeContext';


const Header = () => {
    //const [darkMode, setDarkmode] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleClick = () => {

        if (darkMode) {
            theme.dispatch({ type: "LIGHTMODE" });
        } else {
            theme.dispatch({ type: "DARKMODE" });
        }
    }

    return (
        <nav className="Header">
            <h1 className="title-site">Rick and Morty Characters</h1>
            <button
                className={`btn ${darkMode ? "btn-dark" : "btn-light"}`}
                type="button"
                onClick={handleClick}>
                {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}

            </button>
        </nav>
    );
};

export default Header;