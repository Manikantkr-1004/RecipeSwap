import React from "react";
import styled from "styled-components";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import { ImStarFull } from "react-icons/im";
export const HomeRecipeCard = ({ _id, imageURL, recipeName, mealType,comments }) => {

  return (
    <DIV>
      <Link to={`/recipe/${_id}`}>
        <img style={{width:"100%"}} className="image" src={`${imageURL}`} alt="error" />
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
  
  width: 95%;
  height: auto;
  
  transition: transform 0.2s ;

  &:hover {
    transform: scale(1.05);
  }

  .card-heading-1 {
   
    color: gray;
    font-weight: 900;
  }

  .card-heading-2 {
    
    color: black;
    font-size: 20px;
    font-weight: 900;
  }

  .rating {
    padding: 10px;
  }
  .comment-starts {
    display: flex;
  }

`;
