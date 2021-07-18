import React from 'react'

import Styled from 'styled-components'

// image
import chicken from '../assets/chicken.png'

const EmptyState = () => (
    <StyledEmptyState>
        <img src={chicken} alt="chicken" />
        <p>There is nothing like this on our list place use another keyword.</p>
    </StyledEmptyState>
)

export default EmptyState

const StyledEmptyState = Styled.div`
    width: 100%;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
        width: 114px;
        height: auto;
    }

    p {
        font-size: 1rem;
        color: #8F8F8F;
        font-weight: 400;
        margin-top: .6rem;
        text-align: center;
    }
`