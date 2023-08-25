import React, { useState } from "react";
import styled from "styled-components";
import { RecipeStep } from "../Components/RecipeStep";
import { Social } from "../Components/Social";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdStarOutline } from "react-icons/io";
import { AiFillPrinter } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { RecipeCard } from "../Components/RecipeCard";

export function RecipeType2() {
  let { id } = useParams();
  const [Recipe, setRecipe] = useState({});
  const recipes = useSelector((store) => store.recipeReducer.recipes);

  useEffect(() => {
    const data = recipes.filter((el) => el._id == id);
    setRecipe(data[0]);
  }, []);

  return (
    <>
      <Navbar />
      <WRAPPER>
        <div>
          <h1 className="heading-1">{Recipe.recipeName}</h1>
          <div className="owner-sec">
            <div>
              <p>
                By <span className="owner-name">{Recipe.username}</span>|
                Published on March 31, 2021
              </p>
            </div>
            <Social />
          </div>
          <div className="recipe-saveOptions-container">
            <div className="recipe-saveOptions btn btn-1">
              <button className="btn-w">Save</button>
              <AiOutlineHeart className="icon icon-1" />
            </div>
            <div className="recipe-saveOptions btn">
              <button className="btn-w">Rate</button>
              <IoMdStarOutline className="icon" />
            </div>
            <div className="recipe-saveOptions btn">
              <button className="btn-w">Print</button>
              <AiFillPrinter className="icon" />
            </div>
            <div className="recipe-saveOptions">
              <button className="btn-w">Share</button>
              <IoMdShareAlt className="icon" />
            </div>
          </div>
          <div className="desc-container">
            <img className="recipe-img" src={Recipe.imageURL} alt="error" />
            <div className="Prep-info">
              <div>
                <p className="prep-heading">Prep Time:</p>
                <p>{Recipe.prepTime}</p>
              </div>
              <div>
                <p className="prep-heading">Total Time:</p>
                <p>{Recipe.totalTime}</p>
              </div>
              <div>
                <p className="prep-heading">Servings:</p>
                <p>{Recipe.servings}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ingredients-container">
          <h1 className="ingredients-heading">Ingredients</h1>
          <ul>
            {Recipe.ingredients?.map((el) => {
              return <li>{el}</li>;
            })}
          </ul>
        </div>
        <div className="instructions-section">
          <p className="instructions-heading">Instructions</p>
          {Recipe.instructions?.map((el, i) => {
            let number = i + 1;
            return (
              <div className="instructions">
                <div className="instructions-number">
                  {number >= 10 ? number : `0${number}`}
                </div>
                <p className="instruction-desc">{el}</p>
              </div>
            );
          })}
        </div>
        <div className="NutritionFacts-section">
          <h1 className="NutritionFacts-heading">
            Nutrition Facts{" "}
            <span className="span-semi-heading">{"(per serving)"}</span>
          </h1>
          <div className="NutritionFacts-info-Container">
            <div className="cate-container">
              <p className="cate-heading">{Recipe?.nutrition?.calories}</p>
              <p>Calories</p>
            </div>
            <div className="cate-container">
              <p className="cate-heading">{Recipe?.nutrition?.totalFat}</p>
              <p>Fat</p>
            </div>
            <div className="cate-container">
              <p className="cate-heading">
                {Recipe?.nutrition?.totalCarbohydrates}
              </p>
              <p>Carbs</p>
            </div>
            <div className="cate-container">
              <p className="cate-heading">{Recipe?.nutrition?.protein}</p>
              <p>Protein</p>
            </div>
            <div className="cate-container">
              <p className="cate-heading">{Recipe?.nutrition?.sugars}</p>
              <p>sugars</p>
            </div>
          </div>
        </div>
        {/* <RecipeStep/> */}
      </WRAPPER>
      <DIV>
        <div className="cards-container">
          {recipes?.map((el, i) => {
            if (i <= 7) {
              return <RecipeCard key={i} {...el} />;
            }
          })}
        </div>
      </DIV>
      <Footer />
    </>
  );
}

const WRAPPER = styled.div`
  width: 65%;
  margin: 50px auto;

  .heading-1 {
    font-size: 40px;
    font-weight: 700;
  }

  .owner-sec {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .owner-name {
    border-bottom: 1px solid #f15025;
    font-weight: 500;
  }

  .recipe-img {
    width: 90%;
    margin-bottom: 60px;
  }

  .desc-container {
    width: 65%;
  }

  .desc-container > p {
    font-weight: 500;
  }

  .recipe-saveOptions-container {
    display: flex;
    width: 42.5%;
    margin-bottom: 10px;
    padding: 15px 0px;
  }

  .recipe-saveOptions {
    background-color: #f5f6ea;
    display: flex;
    align-items: center;
    padding: 0px 20px;
  }

  .icon {
    margin-left: 5px;
    font-size: 20px;
    color: #f15025;
  }

  .icon-1 {
    color: white;
  }

  .btn {
    border-right: solid lightgrey 1px;
  }

  .btn-1 {
    background-color: #f15025;
    border-radius: 5px 0px 0px 5px;
    padding: 15px 20px;
    color: white;
  }

  .btn-w {
    font-weight: 900;
  }

  .Prep-info {
    display: flex;
    justify-content: space-between;
    width: 90%;
    background-color: #f5f6ea;
    padding: 40px;
    border: solid lightgray 1px;
  }

  .prep-heading {
    font-weight: 900;
  }

  .ingredients-container {
    margin-top: 40px;
  }

  .ingredients-heading {
    font-size: 35px;
    font-weight: 900;
    margin: 20px 0px;
  }

  li {
    margin-left: 20px;
    margin-bottom: 10px;
    color: black;
  }

  .instructions-section {
    margin-top: 20px;
    border-bottom: solid lightgray 1px;
    padding-bottom: 20px;
  }

  .instructions-heading {
    font-size: 35px;
    font-weight: 900;
  }

  .instructions {
    margin: 20px;
    display: flex;
    height: 60px;
  }

  .instructions-number {
    border-right: solid lightgray 1px;
    padding: 0px 10px;
    font-size: 35px;
    width: 70px;
    color: #f15025;
  }

  .instruction-desc {
    margin-left: 10px;
    border-left: solid lightgray 1px;
    padding-left: 10px;
    width: 500px;
  }

  .NutritionFacts-section {
    margin-top: 50px;
  }

  .NutritionFacts-heading {
    font-size: 35px;
    font-weight: 900;
  }

  .span-semi-heading {
    font-size: 18px;
    font-weight: 300;
  }

  .NutritionFacts-info-Container {
    display: flex;
    justify-content: space-between;
    width: 600px;
    margin: 10px 0px;
  }

  .cate-container {
    width: 65px;
    height: 60px;
  }

  .cate-heading {
    font-weight: 900;
  }
`;

const DIV = styled.div`
    border-bottom: solid lightgray 1px;
  .cards-container {
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 20px;
    padding-bottom: 40px;
  }
`;
