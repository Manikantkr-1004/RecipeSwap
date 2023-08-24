import React from "react";
import styled from "styled-components";

export const RecipeStep = () => {
  return (
    <DIV>
      <div className="step-heading-container">
        <div className="step-heading-child-1">
          <p>01</p>
          <p>0f 06</p>
        </div>
        <div className="step-heading-child-2">Tomato and Bacon Jam</div>
      </div>
      <button className="btn-1">VIEW RECIPE</button>
      <div>
        <img
          className="img-1"
          src="https://www.allrecipes.com/thmb/2tg4K_LB9bndxHv4tIdDjSrFAFc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/878779-457b0ff72c9a4f438c1756ef03773e5f.jpg"
          alt="error"
        />
        <p className="step-desc">
          Here's a sweet-savory recipe you don't want to miss. According to
          recipe creator 3RDTIMESACHARM, this meaty tomato jam works well on
          everything from grilled cheese to eggs.
        </p>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  margin-top: 60px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: solid lightgrey 1px;

  .step-heading-container {
    display: flex;
  }

  .step-heading-child-1 {
    padding: 0px 10px;
    border-right: 1px solid lightgrey;
  }

  .step-heading-child-1 :nth-child(1) {
    font-size: 30px;
  }

  .step-heading-child-2 {
    font-size: 25px;
    font-weight: 700;
    padding-left: 20px;
    margin-left: 20px;
    border-left: solid lightgrey 1px;
  }

  .btn-1 {
    padding: 10px 30px;
    color: white;
    background-color: #f15025;
    font-weight: 500;
    margin-top: 20px;
  }

  .img-1 {
    margin: 30px;
    width: 50%;
  }

  .step-desc{
    width: 60%; 
  }
`;
