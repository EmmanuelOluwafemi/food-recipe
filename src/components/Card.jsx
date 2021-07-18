import React from 'react';

import styled from 'styled-components';
import AddToWishList from './AddToWishList';

import foodSm from '../assets/food-sm.png'

const Card = () => {
    return (
        <StyledCard>
            <div className="img">
                <img src={foodSm} alt="food" />
                <AddToWishList />
            </div>
            <div className="title">Beef and Mustard Pie</div>
        </StyledCard>
    )
}

export default Card;

const StyledCard = styled.div`
    width: 100%;
    height: 183px;
    border-radius: 1rem;
    background-color: #fff;
    overflow: hidden;

    .img {
        position: relative;
        width: 100%;
        height: 112px;
        overflow: hidden;

        img {
            width: 100%;
            object-fit: cover;
        }
    }

    .title {
        font-size: 1rem;
        text-align: center;
        line-height: 1.5;
        color: #000;
        font-weight: 400;
        padding: 1rem;

        @media (max-width: 767px) {
            padding: .5rem;
        }
    }
`