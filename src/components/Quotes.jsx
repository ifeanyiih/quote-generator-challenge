import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Quote from './Quote'
import { useLocation } from 'react-router-dom'

const Div = styled.div`
    margin-block: 4rem 4rem;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .quotes {
        overflow-y: auto;
    }

    h1 {
        font-family: "Raleway",
        font-weight: 700;
        font-size: 36px;
        color: #333333;
        line-height: 42px;
        text-transform: capitalize;
        margin-block-end: 3.5rem;
        text-align: center;
    }

  .blockquote:first-of-type {
    margin-block-start: 0px;
  }

    .blockquote + .blockquote {
        margin-block-start: 90px;
    }

    @media (min-width: 500px) {
        margin-inline-start: 130px;
        display: block;

        h1 {
            margin-block-end: 140px;
            text-align: start;
        }

        .blockquote + .blockquote {
            margin-block-start: 140px;
        }
    }

    @media (min-width: 1280px) {
        margin-inline-start: 309px;
    }

`

const Quotes = (props) => {

    const location = useLocation()
    const [quotes, setQuotes] = useState([])
    useEffect(() => {
        fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${location.state}&limit=1000`)
        .then(response => response.json())
        .then(response => {
            let {data} = response;
            setQuotes(data);
        })
    }, [])

    const quotesMap = quotes.map(quote => {
        return <Quote key={quote._id}  quoteText={quote.quoteText}/>
    })


  return (
    <Div className="quotes">
        <h1>{location.state}</h1>

        <div className="quotes">
            {quotesMap}
        </div>
    </Div>
  )
}

export default Quotes