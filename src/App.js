import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hey! This is my crypto portfolio.
        </p>
        <a
          className="App-link"
          href="https://jakeradler.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here
        </a>
      </header>
    </div>
  );
}

export default App;
