import './App.css';
import { useEffect, useState } from 'react';
import KanyeQuote from './KanyeQuote.jsx'

function App() {
  const [data, setData] = useState({ quote: null, isLoading: true });

  // HINT YOU'RE GONNA USE THIS
  // https://beta.reactjs.org/learn#responding-to-events
  const handleClick = () => alert('What did I tell you!')

  /* eslint-disable  */
  useEffect(() => {
    const restAPIUrl = 'https://api.kanye.rest/';

    // Pro Tip:  Never load data here. Only for demo app.
    fetch(restAPIUrl)
      .then(res => res.json())
      .then(({quote}) => {
        setData({quote, isLoading: false})
      });

    return () => setData({quote: null, isLoading: true});
  }, []);
  return (
    <div className="App">
      {
        !data.isLoading && <KanyeQuote quote={data.quote} />
      }
      <p>-Kanye West</p>
      <button>
        Don't Click Me!
      </button>
    </div>
  );
}

export default App;
