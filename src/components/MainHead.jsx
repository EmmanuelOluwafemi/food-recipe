import React, { useState } from "react";

import Styled from "styled-components";

// icons
import { RiSearch2Line } from "react-icons/ri";

const MainHead = () => {
	const [value, setValue] = useState("");

	return (
		<StyledMain>
			<div className="text-content">
				<h6>Hi</h6>
				<h1>What would you like to Cook?</h1>
			</div>
			<div className="input-container">
				<RiSearch2Line className="icon" />
				<input
					type="text"
					placeholder="Search for a meal"
					onChange={(e) => setValue(e.target.value)}
					value={value}
				/>
			</div>
		</StyledMain>
	);
};

export default MainHead;

const StyledMain = Styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
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

    .input-container {
        width: 100%;
        max-width: 370px;
        height: 48px;
        border-radius: 1rem;
        background: #FFFFFF;
        box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.1);
        display: flex;
        flex: 16px 1fr;
        align-items: center;
        justify-content: flex-start;
        padding: 0 1rem;

        @media (max-width: 768px) {
            margin-top: 1rem;
        }

        .icon {
            font-size: 1rem;
            color: #000;
        }

        input {
            width: 100%;
            height: 100%;
            background: none;
            border: none;
            outline: none;
            padding: 0 1rem;
            color: #000;
            font-size: 1rem;
        }
    }
`;
