import logo from './logo.svg';
import './App.css';
// import LinkTo from './LinkTo.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        { /* 🥵 START EXTRACT ME INTO MY OWN COMPONENT called LinkTo */ }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        { /* 🥵 END EXTRACT ME INTO MY OWN COMPONENT */ }
      </header>
    </div>
  );
}

export default App;
