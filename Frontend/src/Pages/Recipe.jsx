import React, { useState } from "react";
import styled from "styled-components";
import { RecipeStep } from "../Components/RecipeStep";
import { Social } from "../Components/Social";

export function Recipe() {

  return (
    <>
      <WRAPPER>
        <div>
          <h1 className="heading-1">5 Easy Tomato Jam Recipes to Make At Home</h1>
          <div className="owner-sec">
            <div>
              <p>By <span className="owner-name">Corey William </span>| Published on March 31, 2021</p>
            </div>
             <Social/>
          </div>
          <div className="desc-container">
            <img className="recipe-img" src="https://www.allrecipes.com/thmb/CiufPY0bdVsRlsp8ip9LTbX1GPI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/5679135-small-batch-basil-and-cherry-tomato-freezer-jam-photo-by-kim-resized-a2f852307cc74ac4b38e2e2c4185b221.jpg" alt="error" />
            <p>Looking for something to do with leftover green or red tomatoes? Make the most of tomato season with one of our favorite easy, delicious, and seasonal jams. Whether you scoop it onto crackers, spread it over toast, or mix it into sweet-and-savory meat marinades, you'll find a new warm weather favorite in this collection of our best tomato jam recipes.</p>
          </div>
        </div>
        <div>
          <RecipeStep/>
        </div>
      </WRAPPER>
    </>
  );
}

const WRAPPER = styled.div`
width: 65%;
margin: 50px auto;

.heading-1{
  font-size: 40px;
  font-weight: 700;
}

.owner-sec{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}

.owner-name{
  border-bottom: 1px solid #f15025;
  font-weight: 500;
}

.recipe-img{
  width: 90%;
  margin-bottom: 60px;
}

.desc-container{
  width: 65%;
}

.desc-container>p{
  font-weight: 500;
}
`;
