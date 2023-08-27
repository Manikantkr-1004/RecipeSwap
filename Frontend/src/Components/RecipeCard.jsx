import React from "react";
import styled from "styled-components";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import { ImStarFull } from "react-icons/im";

export const RecipeCard = ({ _id, imageURL, recipeName, mealType, comments }) => {
  return (
    <DIV>
      <Link to={`/recipe/${_id}`}>
        <img className="image" src={`${imageURL}`} alt="error" />
        <p className="card-heading-1">{mealType}</p>
        <p className="card-heading-2">{recipeName}</p>
        <div className="rating">
        <div className="comment-starts">
                  {[...Array(5)].map((x, i) => {
                    if (i + 1 <= comments[0]?.rating) {
                      return <ImStarFull color={"#d54215"} />;
                    } else {
                      return <ImStarFull color={"rgb(192,192,192)"} />;
                    }
                  })}
                </div>
          {comments.length} Ratings
        </div>
      </Link>
    </DIV>
  );
};

const DIV = styled.div`
  border: solid lightgray 1px;
  width: 283px;
  height: 350px;
  border-radius: 5px;

  .card-heading-1 {
    padding: 10px 10px 0px 10px;
    color: gray;
    font-weight: 900;
  }

  .card-heading-2 {
    padding: 0px 10px 10px 10px;
    color: black;
    font-size: 20px;
    font-weight: 900;
  }

  .rating {
    padding: 10px;
  }

  .image {
    border-radius: 5px 5px 0px 0px;
  }

  .comment-starts {
    display: flex;
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 400px;
    border-radius: 0px;
    .image {
      border-radius: 0px;
      width: 100%;
    }
  }

  @media (max-width: 610px) {
    width: 100%;
    height: 500px;
    border-radius: 0px;
    .image {
      border-radius: 0px;
      width: 100%;
    }
  }

  @media (max-width: 560px) {
    width: 100%;
    height: 480px;
  }

  @media (max-width: 500px) {
    width: 100%;
    height: 450px;
  }

  @media (max-width: 450px) {
    width: 100%;
    height: 430px;
  }

  @media (max-width: 400px) {
    width: 100%;
    height: 400px;
  }
`;
