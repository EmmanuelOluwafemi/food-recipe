import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import Axios from "../lib/Axios";
import { useLocation } from "react-router-dom";

const MealResults = () => {
	const [searchResults, setSearchResults] = useState([]);

	const location = useLocation();
	const query = new URLSearchParams(location.search).get("query");

	useEffect(() => {
		(async () => {
			try {
				const { data } = await Axios.get(`/search.php?f=${query}`);
				setSearchResults(data.meals);
				console.log(data.meals);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<MealResultsCard>
			<div className="text-content">
				<h6>Hi</h6>
				<h1>What would you like to Cook?</h1>
			</div>
			<div className="meal-cards">
				<div className="heading">Search Results</div>
				<div className="box-container">
					{searchResults.map((searchResult) => (
						<div className="box" key={searchResult.idMeal}>
							<div className="img-container">
								<img src={searchResult.strMealThumb} alt="category" />
							</div>
							<div className="title">{searchResult.strCategory}</div>
						</div>
					))}
				</div>
			</div>
		</MealResultsCard>
	);
};

export default MealResults;

const MealResultsCard = Styled.div`
 width: 100%;
    padding: 5rem 6%;

    @media (max-width: 768px) {
        padding: 3rem 6%;
    }

 .text-content {
        h6 {
            font-size: 1rem;
            font-weight: 400;
            color: #000;
            margin-bottom: 1rem;
        }

        h1 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #000;
            line-height: 1.5;
            max-width: 285px;
        }
    }

    .meal-cards {
      margin: 2rem 0;
      width: 100%;

      .heading {
          font-size: 2rem;
          font-weight: 400;
          color: #000;
          margin-bottom: 2rem;
          text-align: center;
      }

      .box-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

          .box {
          background-color: #fff;
          width: 200px;
          height: 100%;
          border-radius: 16px;
          overflow: hidden;
          margin: 1rem 0.5rem;

          img {
          width: 100%;
          height: 100%;
        }

        .title {
          align-items: center;
          height: 90px;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`;
