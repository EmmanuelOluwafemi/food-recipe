import React, {useState, useEffect} from 'react'

import Styled from 'styled-components'

import Slider from "react-slick";
import MealCard from './MealCard';

// import Configured axios
import Axios from '../lib/Axios';

const RecipeSlide = () => {
    const [data, setData] = useState(true);
    
    useEffect(() => {
        Axios.get('/random.php')
        .then((response) => {
          setData(response.data);
          console.log(data)
        })
          .catch((error) => {
          console.log(error)
          })
         
    }, [])


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ],
    }

    return (
        <StyledRecipe>
            <div className="heading">
                Recipe of the day
            </div>
            <Slider {...settings}>
                <MealCard />
                <MealCard />
                <MealCard />
            </Slider>
        </StyledRecipe>
    )
}

export default RecipeSlide


const StyledRecipe = Styled.section`
    width: 100%;
    margin-top: 1.5rem;

    .heading {
        font-size: .85rem;
        font-weight: 400;
        color: #000;
        margin-bottom: 2rem;
    }
`