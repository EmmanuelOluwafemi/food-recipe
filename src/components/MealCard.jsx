import React from 'react'

import Styled from 'styled-components'
import AddToWishList from './AddToWishList'

// image
import food from '../assets/food.jpg'

const MealCard = () => {
    return (
        <StyledMeal style={{ backgroundImage: `url(${food})` }}>
            <AddToWishList />
            <div className="text-content">
                Baked salmon with fennel & tomatoes
            </div>
        </StyledMeal>
    )
}

export default MealCard

const StyledMeal = Styled.div`
    width: 97%;
    min-height: 148px;
    border-radius: 1rem;
    padding: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    position: relative;
    
    .text-content {
        font-size: 1.3rem;
        font-weight: 700;
        color: #fff;
        line-height: 1.5;
        max-width: 80%;
    }
`