import React from 'react'

import Styled from 'styled-components'

// components
import MainHead from '../components/MainHead'

const Home = () => {
    return (
        <StyledHome>
            <MainHead />
        </StyledHome>
    )
}

export default Home

const StyledHome = Styled.section`
    width: 100%;
    padding: 5rem 6%;

    @media (max-width: 768px) {
        padding: 3rem 6%;
    }
`