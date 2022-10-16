import './App.css';
import KanyeQuote from './KanyeQuote.jsx'

const HARD_CODED_QUOTE = "Tweeting is legal and also therapeutic";

function App() {
  return (
    <div className="App">
      <KanyeQuote quote={HARD_CODED_QUOTE} />
      <p>-Kanye West</p>
    </div>
  );
}

export default App;
