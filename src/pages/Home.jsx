import React from "react";
import Styled from "styled-components";

// components
import MainHead from "../components/MainHead";
import RecipeImage1 from "../assets/images/recipe-image-1.png";

const Home = () => {
	return (
		<StyledHome>
			<MainHead />

			<h5 className="header__sub-text">Recipe of the day</h5>
			<div className="main-container">
				<div className="recipe-image-container">
					<img src={RecipeImage1} alt="image one" />
					<p className="recipe-image-container__text">
						Baked salmon with fennel <br /> & tomatoes
					</p>
				</div>

				<div className="recipe-image-container">
					<img src={RecipeImage1} alt="image one" />
					<p className="recipe-image-container__text">
						Baked salmon with fennel <br /> & tomatoes
					</p>
				</div>

				<div className="recipe-image-container">
					<img src={RecipeImage1} alt="image one" />
					<p className="recipe-image-container__text">
						Baked salmon with fennel <br /> & tomatoes
					</p>
				</div>
			</div>
		</StyledHome>
	);
};

export default Home;

const StyledHome = Styled.section`
    width: 100%;
    padding: 5rem 6%;

    @media (max-width: 768px) {
        padding: 3rem 6%;
    }

    .header__sub-text {
      margin: 1.5rem 0;
      font-weight: 300;
    }

    .main-container {
      display: flex;
      justify-content: space-between;
      
      .recipe-image-container {
        display: flex;
        justify-content: space-between;
        position: relative;
      }
      p {
        position: absolute;
        bottom: 0;
        padding: 1.5rem;
        color: #fff;
      }
    }

    
`;
