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
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { RecipeCard } from "../Components/RecipeCard";
import { ReviewCard } from "../Components/ReviewCard";
import { getAllRecipes } from "../Redux/receipeReducer/action";
import { Spinner } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

export function RecipeType2() {
  let { id } = useParams();
  const [Recipe, setRecipe] = useState({});
  const dispatch = useDispatch();
  const recipes = useSelector((store) => store.recipeReducer.recipes);
  const isLoading = useSelector((store) => store.recipeReducer.loading);

  useEffect(() => {
    dispatch(getAllRecipes());
  }, []);

  useEffect(() => {
    const data = recipes.find((el) => el._id == id);
    setRecipe(data);
  }, [recipes]);

  const handleprint = () => {
    window.print();
  };

  const handleReview = () => {
    window.location.href = "#Review";
  };

  const handleShare = () => {
    window.open(
      `https://wa.me/?text=*${Recipe?.recipeName}*%0A%0ALink👉${window.location.href}`
    );
  };

  return (
    <>
    <Helmet>
      <title>{Recipe? Recipe.recipeName : "Recipe | RecipeSwap"}</title>
    </Helmet>
      <Navbar />
      {isLoading ? (
        <SPINNER>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#f15025"
            size="xl"
          />
        </SPINNER>
      ) : (
        <>
          <WRAPPER>
            <div>
              <h1 className="heading-1">{Recipe?.recipeName}</h1>
              <div className="owner-sec">
                <div>
                  <p>
                    By <span className="owner-name">{Recipe?.username}</span>|
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
                  <button onClick={handleReview} className="btn-w">
                    Rate
                  </button>
                  <IoMdStarOutline className="icon" />
                </div>
                <div className="recipe-saveOptions btn">
                  <button onClick={handleprint} className="btn-w">
                    Print
                  </button>
                  <AiFillPrinter className="icon" />
                </div>
                <div className="recipe-saveOptions">
                  <button onClick={handleShare} className="btn-w">
                    Share
                  </button>
                  <IoMdShareAlt className="icon" />
                </div>
              </div>
              <div className="desc-container">
                <img
                  className="recipe-img"
                  src={Recipe?.imageURL}
                  alt="Recipe image"
                />
                <div className="Prep-info">
                  <div>
                    <p className="prep-heading">Prep Time :</p>
                    <p>{Recipe?.prepTime}</p>
                  </div>
                  <div>
                    <p className="prep-heading">Total Time :</p>
                    <p>{Recipe?.totalTime}</p>
                  </div>
                  <div>
                    <p className="prep-heading">Servings :</p>
                    <p>{Recipe?.servings}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ingredients-container">
              <h1 className="ingredients-heading">Ingredients</h1>
              <ul>
                {Recipe?.ingredients?.map((el) => {
                  return <li>{el}</li>;
                })}
              </ul>
            </div>
            <div className="instructions-section">
              <p className="instructions-heading">Instructions</p>
              {Recipe?.instructions?.map((el, i) => {
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
            <ReviewCard Recipename={Recipe?.recipeName} Recipeobj={Recipe} />
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
        </>
      )}
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
    height: 70px;
    width: 100%;
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
    width: 700px;
    height: 70px;
  }

  .NutritionFacts-section {
    margin-top: 50px;
    border-bottom: solid lightgray 1px;
    padding-bottom: 25px;
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

  @media (max-width: 1100px) {
    width: 80%;

    .desc-container {
      width: 100%;
    }
  }

  
  @media (max-width: 740px) {
    .NutritionFacts-info-Container {
      display: flex;
      justify-content: space-between;
      width: 400px;
      margin: 10px 0px;
    }
    
    .recipe-saveOptions {
      background-color: #f5f6ea;
      display: flex;
      align-items: center;
      padding: 10px 20px;
    }

    .icon {
      margin-left: 5px;
      font-size: 20px;
      color: #f15025;
    }
    
    .btn-1 {
      background-color: #f15025;
      border-radius: 5px 0px 0px 5px;
      padding: 15px 20px;
      color: white;
    }
    
    .btn {
      border-right: none;
    }
    
    .NutritionFacts-info-Container {
      display: block;
      justify-content: space-between;
      width: 600px;
      margin: 10px 0px;
    }
    
    .instruction-desc {
      margin-left: 10px;
      border-left: solid lightgray 1px;
      padding-left: 10px;
      width: auto;
      height: auto;
    }
    
    .instructions {
      margin: 20px;
      display: flex;
      height: auto;
      width: 100%;
    }
    
    .NutritionFacts-info-Container {
      display: flex;
      justify-content: space-between;
      width: auto;
      margin: 10px 0px;
    }
  }
  
  @media (max-width: 670px) {
    .owner-sec {
      display: block;
    }
    
    .owner-sec > div {
      margin-top: 10px;
    }
  }
  
  @media (max-width: 550px) {
    width: 90%;

    .heading-1{
      font-size: 30px;
    }

    .Prep-info{
      display: block;
      padding: 10px 20px;
    }

    .Prep-info>div{
      margin: 20px 0px;
      display: flex;
    }

    .prep-heading{
      margin-right: 10px;
    }

    .instructions-number{
      font-size: 25px;
    }

    .instructions{
      margin: 0px;
    }

    .instruction-desc{
      width: 300px;
    }
  }

  @media (max-width: 520px) {
    .recipe-saveOptions-container {
      display: block;
      flex-wrap: wrap;
      width: 100%;
      margin-bottom: 10px;
      padding: 15px 0px;
    }
  }

  @media (max-width: 470px) {
    .NutritionFacts-heading{
      font-size: 26px;
    }

    .NutritionFacts-info-Container{
      display: block;
    }

    .NutritionFacts-info-Container>div{
      display: flex;
    }

    .cate-container{
      height: auto;
      margin: 15px 0px;
    }

    .cate-heading{
      margin-right: 10px;
    }
  }
  
  @media (max-width: 425px) {
    .owner-sec {
      display: block;
    }

    .owner-sec > div {
      margin-top: 10px;
    }

    .instructions {
      display: flex;
      height: auto;
      margin: 10px 0px;
    }
  }

  @media(max-width: 330px){
    .heading-1{
      font-size: 23px;
    }

    .owner-sec{
      font-size: 13px;
    }
  }
`;

const DIV = styled.div`
  display: flex;
  justify-content: center;

  .cards-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    padding-bottom: 40px;
  }

  @media (max-width: 1200px) {
    .cards-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-row-gap: 20px;
      grid-column-gap: 20px;
      padding-bottom: 40px;
    }
  }

  @media (max-width: 900px) {
    .cards-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 20px;
      grid-column-gap: 20px;
      padding-bottom: 40px;
    }
  }

  @media (max-width: 610px) {
    .cards-container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 20px;
      grid-column-gap: 20px;
      padding-bottom: 40px;
    }
  }
`;

const SPINNER = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
