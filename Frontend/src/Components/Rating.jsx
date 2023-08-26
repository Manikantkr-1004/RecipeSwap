import React, { useState } from "react";
import {ImStarFull} from "react-icons/im";
import { Container, Radio, Rating } from "./RatingStyles";
const Rate = ({getRating}) => {
	const [rate, setRate] = useState(0);
	return (
		<Container>
			{[...Array(5)].map((item, index) => {
				const givenRating = index + 1;
				return (
					<label>
						<Radio
							type="radio"
							value={givenRating}
							onClick={() => {
								setRate(givenRating);
                                getRating(givenRating);
							}}
						/>
						<Rating>
							<ImStarFull
								color={
									givenRating < rate || givenRating === rate
										? "000"
										: "rgb(192,192,192)"
								}
							/>
						</Rating>
					</label>
				);
			})}
		</Container>
	);
};

export default Rate;
