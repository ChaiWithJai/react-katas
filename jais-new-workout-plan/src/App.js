import './App.css';
import { useEffect, useState } from 'react';
import KanyeQuote from './KanyeQuote.jsx'

function App() {
  const [data, setData] = useState({ quote: null, isLoading: true });
  /* eslint-disable  */
  useEffect(() => {
    const restAPIUrl = 'https://api.kanye.rest/';

    // Pro Tip:  Never load data here. Only for demo app.
    fetch(restAPIUrl)
      .then(res => res.json())
      .then(({quote}) => {
        console.log('Quote is:  ', quote);
        setData({quote, isLoading: false})
      });

    return () => setData({quote: null, isLoading: true});
  }, []);
  return (
    <div className="App">
      {
        /* 
          Write some conditional logic here and give this a small refactor
          Follow the docs here:  https://beta.reactjs.org/learn#conditional-rendering
        */ 
      }
      <KanyeQuote quote={data.quote} />
      <p>-Kanye West</p>
    </div>
  );
}

export default App;
