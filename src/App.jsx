import { useState } from 'react'
import './App.css'
import quotes from './assets/quotes.json'
import React from 'react'
import {FaTwitter, FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'


const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const changeBackgroundColor = () => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red},${green},${blue})`;
}

const timing = "all 1s"
function App() {
  const [quote, setQuote] = useState(getRandomQuote())
  const [color, setColor] = useState(changeBackgroundColor())
  const changeQuote = () => {
    setQuote(getRandomQuote());
    setColor(changeBackgroundColor());
  }
  return (
    <div className='background' style={{backgroundColor: color, transition: timing}}>
      <div id="quote-box">
        <div className="quote-content" style={{color: color, transition: timing}}>
            <h2 id="text">
              <FaQuoteLeft size="30" style={{ marginRight: "10px"}}/>
              {quote.quote}
              <FaQuoteRight size="30" style={{ marginLeft: "10px"}}/>
            </h2>
            <h4 id="author">- {quote.author}</h4>
        </div>
        
        <div className="button">
          <a href="twitter.com/intent/tweet" id="tweet-quote" style={{backgroundColor: color, transition: timing}}>
            <FaTwitter/>
          </a>
          <button id="new-quote" onClick={changeQuote} style={{backgroundColor: color, transition: timing}}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
