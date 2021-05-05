import React, {useState, useContext} from 'react';
import ThemeContext from '../context/ThemeContext';


const Header = () => {
    const [darkMode, setDarkmode] = useState(false);
    const color = useContext(ThemeContext);

    const handleClick = () => {
        setDarkmode(!darkMode);
    }

    return (
        <nav className="Header">
            <h1 style={{color}}>Rick and Morty Characters</h1>
            <button type="button" onClick={handleClick}> {darkMode ? 'Dark Mode' : 'Ligth Mode'}</button>
        </nav>
    );
};

export default Header;