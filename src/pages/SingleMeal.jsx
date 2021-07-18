import React from 'react'

import Styled from 'styled-components'

// icon
import { IoChevronBackSharp } from 'react-icons/io5';

// image
import meal from '../assets/meal.jpg'

const SingleMeal = () => {
    return (
        <StyledSingleMeal>
            <IoChevronBackSharp className="icon" />

            <div className="two-grid">
                <img src={meal} alt="meal" />
                <div className="content">
                    <h1>Spicy Arrabiata Penne</h1>
                    <label>Vegetarian</label>

                    <div className="heading first">Ingrident</div>
                    <div className="labels">
                        <span className="tip"><b>4</b> Eggs</span>
                        <span className="tip"><b>2 tbs</b> of White Wine Vinegar</span>
                        <span className="tip"><b>2</b> English Muffins</span>
                    </div>

                    <div className="heading">Direction</div>
                    <p>
                       First make the Hollandaise sauce. Put the lemon juice and vinegar in a 
                       small bowl, add the egg yolks and whisk with a balloon whisk until light 
                       and frothy. Place the bowl over a pan of simmering water and whisk until 
                       mixture thickens. Gradually add the butter, whisking constantly until thick – 
                       if it looks like it might be splitting, then whisk off the heat for a few mins. 
                       Season and keep warm. To poach the eggs, bring a large pan of water to the boil and 
                       add the vinegar. Lower the heat so that the water is simmering gently. 
                       Stir the water so you have a slight whirlpool, then slide in the eggs one by one. 
                       Cook each for about 4 mins, then remove with a slotted spoon. Lightly toast and butter the muffins, 
                       then put a couple of slices of salmon on each half. Top each with an egg, spoon over 
                       some Hollandaise and garnish with chopped chives.
                    </p>
                    
                </div>
            </div>
        </StyledSingleMeal>
    )
}

export default SingleMeal

const StyledSingleMeal = Styled.section`
    width: 100%;
    min-height: 100%;
    padding: 4rem 6%;

    .icon {
        position: fixed;
        top: 64px;
        left: 6%;
        font-size: 1.5rem;
        padding: .4rem;
        border-radius: 8px;
        border: 1px solid #000;
        background: #fff;
        box-sizing: content-box;
        cursor: pointer;
        transition: all .2s ease;

        &:hover {
            background-color: #000;
            color: #fff;
        }
    }
    
    .two-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;
        
        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
        }

        img {
            width: 100%;
            height: auto;
        }

        .content {
            width: 100%;
            
            h1 {
                font-size: 2rem;
                font-weight: 700;
                color: #000;
                line-height: 1.5;
                margin-bottom: .8rem;
                margin-top: 1rem;
            }

            label {
                font-size: .75rem;
                font-weight: 400;
                color: #454545;
                margin-bottom: 3rem;
            }

            .heading {
                font-size: 1rem;
                font-weight: 700;
                color: #000;
                line-height: 1.5;

                &.first {
                    margin-top: 1.5rem;
                }
            }

            .labels {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                margin-top: 1rem;
                margin-bottom: 2rem;

                .tip {
                    padding: 8px 10px;
                    border-radius: 8px;
                    font-size: .8rem;
                    margin-right: .7rem;
                    color: #ccc;
                    background-color: #000;
                    margin-bottom: .7rem;

                    b {
                        color: #fff;
                    }
                }
            }

            p {
                font-size: .8rem;
                font-weight: 400;
                line-height: 1.8;
                color: #454545;
                margin-top: 1rem;
            }
        }
    }

    @media (max-width: 768px) {
        padding: 3rem 6%;
    }

`