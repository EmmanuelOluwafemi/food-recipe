import React from 'react'

import Styled from 'styled-components'

import cat from '../assets/cat.jpg'

const CategoryCard = () => {
    return (
        <StyledCategoryCard>
            <div className="img-container">
                <img src={cat} alt="category" />
            </div>
            <div className="title">Beef</div>
        </StyledCategoryCard>
    )
}

const Categories = () => {
    return (
        <StyledCategories>
            <div className="heading">
                Categories
            </div>
            <div className="grid">
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>
        </StyledCategories>
    )
}

export default Categories

const StyledCategories = Styled.div`
    margin: 2rem 0;
    width: 100%;

    .heading {
        font-size: .85rem;
        font-weight: 400;
        color: #000;
        margin-bottom: 2rem;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(113px, 1fr));
        grid-gap: 1rem;
        justify-content: flex-start;

        @media (max-width: 576px) {
            grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
            grid-gap: .5rem;
        }
    }
`
const StyledCategoryCard = Styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    border-radius: 1rem;
    cursor: pointer;
    max-width: 113px;
    padding: 0.5rem;
    transition: box-shadow 0.4s ease-in-out;

    &:hover {
        box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.1);
    }

    .img-container {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-bottom: 10px;
        overflow: hidden;

        img {
            object-fit: cover;
        }
    }

    .title {
        font-size: .85rem;
        font-weight: 400;
        color: #000;
        text-align: center;
    }
`

