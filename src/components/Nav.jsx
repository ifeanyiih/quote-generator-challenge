import React, { useState } from 'react'
import {MdCached} from 'react-icons/md'
import styled from 'styled-components'
import { useNavigate, useMatch, useLocation } from 'react-router-dom'

const NavElem = styled.nav`
    display: flex;
    justify-content: flex-end;
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    position: fixed;
    top: 0px;
    right: 1rem;
    left: 0;
    padding-block-start: 31px;
    padding-block-end: 1rem;
    color: #4f4f4f;
    background: #fff;

    button {
        display: flex;
        align-items: center;
        gap: 11px;
        font-size: 18px;
        color: inherit;
        background: transparent;
        border: none;
        cursor: pointer;
        font-family: inherit;
        font-weight: inherit;

        svg {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`

const Nav = () => {
    const location = useLocation()
    let navigate = useNavigate();


  return (
    <NavElem>
        <button
        onClick={() => {
           if (location.pathname == '/') {
               navigate(0)
           }else {
               navigate('/')
           }
        }}
        >random <MdCached/>
        </button>
    </NavElem>
  )
}

export default Nav