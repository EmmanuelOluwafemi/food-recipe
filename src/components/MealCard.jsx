import React from 'react'

import Styled from 'styled-components'

// image
import food from '../assets/food.jpg'

const MealCard = () => {
    return (
        <StyledMeal style={{ background: `url(${food})` }}>
            <div className="text-content">
                Baked salmon with fennel & tomatoes
            </div>
        </StyledMeal>
    )
}

export default MealCard

const StyledMeal = Styled.div`
    width: 100%;
    min-height: 148px;
    border-radius: 1rem;
    padding: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    
    .text-content {
        font-size: 1.3rem;
        font-weight: 700;
        color: #fff;
        line-height: 1.5;
        max-width: 80%;
    }
`