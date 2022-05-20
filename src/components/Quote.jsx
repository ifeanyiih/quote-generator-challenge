import React from 'react'
import styled from 'styled-components'

const BlockQuote = styled.blockquote`
    padding-inline-start: 1rem;
    border-inline-start: 8px solid #F7DF94;
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: clamp(1rem, 1.5rem, 36px);
    color: #000000;
    margin-block-start: 9.5rem;

    @media (min-width: 500px) {
        padding-inline-start: 99px;
    }

    p {
        max-inline-size: 36ch;
    }

`

const Quote = ({quoteText}) => {
  return (
    <BlockQuote>
        <p>
            {quoteText}
        </p>
    </BlockQuote>
  )
}

export default Quote