import React from 'react'
import { MdArrowRightAlt } from 'react-icons/md'
import styled from 'styled-components'

const Btn = styled.button`
    display: block;
    border none;
    inline-size: 100%;
    margin-block-start: 109px;
    cursor: pointer;
    padding-inline: 29px;
    padding-block: 50px;
    background: transparent;

    .author {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 500;
        inline-size: 100%;

        svg {
            color: #f2f2f2;
            width: 1.5rem;
            height: 1.5rem;
        }
    }
    
    .info {
        font-family: "Raleway", sans-serif;
        color: #4f4f4f;
        font-size: 1.5rem;
        font-weight: 700;

        cite {
            font-style: normal;
        }
    }
    
    .span {
        color: #828282;
        font-size: 14px;
        line-height: 1rem;
        margin-block-start: 8px;
        display: block;
        font-weight: 500;
        text-align: start;
    }


    &:hover {
        background-color: #333;

        .info {
            color: #f2f2f2;
        }
        
    }

    @media (min-width: 500px) {
        margin-inline-start: 70px;
    }

`

const Author = ({quoteAuthor, quoteGenre}) => {
  return (
    <Btn>
        <div className="author">
            <div className="info">
                <p>
                    <cite>{quoteAuthor}</cite>
                </p>
                <span className="span">
                    {quoteGenre}
                </span>
            </div>

            <MdArrowRightAlt className='svg'/>
        </div>
    </Btn>
  )
}

export default Author