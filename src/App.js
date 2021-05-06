import { useContext } from 'react';
import './App.css';
import Characters from './components/Characters';
import Header from './components/Header';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={`App ${darkMode ? "bg-dark" : "bg-light"}`}>
      <Header/>
      <Characters/>
    </div>
  );
}

export default App;
