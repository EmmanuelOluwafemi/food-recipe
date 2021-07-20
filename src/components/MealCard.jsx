import React, { useState, useEffect } from "react";
import Axios from "../lib/Axios";

import Styled from "styled-components";
import AddToWishList from "./AddToWishList";

const MealCard = () => {
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const { data } = await Axios.get("/random.php");
				setMeals(data.meals);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<div>
			{meals.map((meal) => (
				<StyledMeal
					key={meal.idMeal}
					style={{
						backgroundImage: `linear-gradient(45deg, black, transparent), url(${meal.strMealThumb})`,
					}}
				>
					<AddToWishList />
					<div className="text-content">{meal.strMeal}</div>
				</StyledMeal>
			))}
		</div>
	);
};

export default MealCard;

const StyledMeal = Styled.div`
    width: 97%;
    min-height: 200px;
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
        /* max-width: 80%; */
    }
`;
