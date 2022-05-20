import React from 'react'
import { useState, useEffect } from 'react'
import Quote from './Quote'
import Author from './Author'


const Random = () => {
    const [quote, setQuote] = useState([]);


    function fetchQuote() {
        fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
        .then(response => response.json())
        .then(response => {
            let {data} = response;
            setQuote(data[0]);
        })
    }

    useEffect(() => {
        fetchQuote()
    }, []);


  return (
    <div className="random">
        <Quote quoteText={quote.quoteText} />
        <Author 
            quoteAuthor={quote.quoteAuthor} 
            quoteGenre={quote.quoteGenre}
        />
    </div>
  )
}

export default Random