import React from 'react'

import Styled from 'styled-components'

// components
import Categories from '../components/Categories'
// import EmptyState from '../components/EmptyState'
// import FoodGrid from '../components/FoodGrid'
import MainHead from '../components/MainHead'
import RecipeSlide from '../components/RecipeSlide'

const Home = () => {
    return (
        <StyledHome>
            <MainHead />
            <RecipeSlide />
            <Categories />
            {/* <FoodGrid /> */}
            {/* <EmptyState /> */}
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