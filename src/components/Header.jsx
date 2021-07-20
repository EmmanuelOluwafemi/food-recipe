import React from 'react'

import Styled from 'styled-components'

import { Link } from 'react-router-dom'

import { FaBookmark } from 'react-icons/fa';

const Header = () => (
    <StyledHeader>
        <Link to="/" className="logo">
            Food<span>Recip.</span>
        </Link>

        <Link>
            <FaBookmark className="icon" />
            Saved
        </Link>
    </StyledHeader>
)

export default Header

const StyledHeader = Styled.header`
    width: 100%;
    height: 56px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: #fff;
    padding: 0 6%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 99;

    @media (max-width: 768px) {
        display: none;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: 700;
        color: #000;

        span {
            color: #FACE2D;
            text-transform: uppercase;
        }
    }

    a {
        display: flex;
        align-items: center;
        font-size: 1rem;
        color: #000;
        text-decoration: none;
        transition: color .2s;

        .icon {
            font-size: 1.5rem;
        }

        &:hover {
            color: #FACE2D;
        }
    }
`