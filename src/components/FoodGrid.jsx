import React from 'react';

import Styled from 'styled-components'
import Card from './Card';

const FoodGrid = () => {
    return (
        <StyledFoodGrid>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </StyledFoodGrid>
    )
}

export default FoodGrid;

const StyledFoodGrid = Styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
    grid-gap: 1rem;
    justify-content: flex-start;

    @media (max-width: 576px) {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        grid-gap: .7rem;
    }
`