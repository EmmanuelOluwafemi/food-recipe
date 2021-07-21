import React, { useState, useEffect } from "react";
import Axios from "../lib/Axios";

import Styled from "styled-components";

const CategoryCard = () => {
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const { data } = await Axios.get("/categories.php");
				setMeals(data.categories);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<div className="grid">
			{meals.map((meal) => (
				<StyledCategoryCard key={meal.idCategory}>
					<div className="img-container">
						<img src={meal.strCategoryThumb} alt="category" />
					</div>
					<div className="title">{meal.strCategory}</div>
				</StyledCategoryCard>
			))}
		</div>
	);
};

const Categories = () => {
	return (
		<StyledCategories>
			<div className="heading">Categories</div>
			<div>
				<CategoryCard />
			</div>
		</StyledCategories>
	);
};

export default Categories;

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
            grid-gap: .3rem;
        }
    }

    /* .grid-sub-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    } */

`;
const StyledCategoryCard = Styled.div`
    width: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    border-radius: 1rem;
    cursor: pointer;
    /* max-width: 113px; */
    padding: 0.5rem;
    transition: box-shadow 0.4s ease-in-out;

    &:hover {
        box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.1);
    }

    .img-container {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        margin-bottom: 10px;
        overflow: hidden;

        @media (max-width: 768px) {
            width: 80px;
            height: 80px;
        }

        img {
            /* object-fit: cover; */
            width: 100%;
        }
    }

    .title {
        font-size: .85rem;
        font-weight: 400;
        color: #000;
        text-align: center;
    }
`;
