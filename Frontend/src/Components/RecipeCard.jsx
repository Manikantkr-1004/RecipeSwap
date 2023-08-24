import React from "react";
import styled from "styled-components";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

export const RecipeCard = ({ _id, imageURL, recipeName, mealType }) => {

  return (
    <DIV>
      <Link to={`/recipe/${_id}`}>
        <img src={imageURL} alt="error" />
        <p className="card-heading-1">{mealType}</p>
        <p className="card-heading-2">{recipeName}</p>
        <div className="rating">
          <FcLike />
          7,760 Ratings
        </div>
      </Link>
    </DIV>
  );
};

const DIV = styled.div`
  border: solid lightgray 1px;
  width: 283px;
  height: 350px;

  .card-heading-1 {
    padding: 10px 10px 0px 10px;
    color: gray;
    font-weight: 900;
  }

  .card-heading-2 {
    padding: 0px 10px 10px 10px;
    color: black;
    font-size: 25px;
    font-weight: 900;
  }

  .rating {
    padding: 10px;
  }
`;
