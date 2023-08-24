import React, { useState } from "react";
import styled from "styled-components";
import { RecipeStep } from "../Components/RecipeStep";
import { Social } from "../Components/Social";
import {AiOutlineHeart} from "react-icons/ai";
import {IoMdStarOutline} from "react-icons/io";
import {AiFillPrinter} from "react-icons/ai";
import {IoMdShareAlt} from "react-icons/io";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";


export function RecipeType2() {
    let { id } = useParams();
    const [Recipe, setRecipe] = useState({});
    const recipes = useSelector((store) => store.recipeReducer.recipes);

    useEffect(()=>{
       const data = recipes.filter((el) => el._id == id);
       setRecipe(data[0])
    },[])

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
          <div className="recipe-saveOptions-container">
            <div className="recipe-saveOptions btn btn-1">
                <button className="btn-w">Save</button>
                <AiOutlineHeart className="icon icon-1"/>
            </div>
            <div className="recipe-saveOptions btn">
                <button className="btn-w">Rate</button>
                <IoMdStarOutline className="icon"/>
            </div>
            <div className="recipe-saveOptions btn">
                <button className="btn-w">Print</button>
                <AiFillPrinter className="icon"/>
            </div>
            <div className="recipe-saveOptions">
                <button className="btn-w">Share</button>
                <IoMdShareAlt className="icon"/>
            </div>
          </div>
          <div className="desc-container">
            <img className="recipe-img" src="https://www.allrecipes.com/thmb/CiufPY0bdVsRlsp8ip9LTbX1GPI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/5679135-small-batch-basil-and-cherry-tomato-freezer-jam-photo-by-kim-resized-a2f852307cc74ac4b38e2e2c4185b221.jpg" alt="error" />
            <div className="Prep-info">
                <div>
                    <p className="prep-heading">Prep Time:</p>
                    <p>20 mins</p>
                </div>
                <div>
                    <p className="prep-heading">Total Time:</p>
                    <p>20mins</p>
                </div>
                <div>
                    <p className="prep-heading">Servings:</p>
                    <p>4</p>
                </div>
            </div>
          </div>
        </div>
        <div className="ingredients-container">
            <h1 className="ingredients-heading">Ingredients</h1>
            <ul>
                <li>2 tablespoons extra-virgin olive oil</li>
                <li>2 tablespoons red wine vinegar or rosé vinegar</li>
                <li>3/4 teaspoon salt</li>
                <li>1/2 teaspoon black pepper</li>
                <li>1 1/2 cups red cherry tomatoes, halved</li>
                <li>1 1/2 cups yellow cherry tomatoes, halved</li>
                <li>1 (5-ounce package) arugula</li>
                <li>3/4 cup fresh basil leaves</li>
                <li>2 nectarines, sliced</li>
                <li>1 large white peach, sliced</li>
                <li>1 cup Rainier or other yellow-flesh cherries, pitted and halved</li>
                <li>1/2 teaspoon flaky sea salt</li>
            </ul>
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

.recipe-saveOptions-container{
    display: flex;
    width: 42.5%;
    margin-bottom: 10px;
    padding: 15px 0px;
}

.recipe-saveOptions{
    background-color: #f5f6ea;
    display: flex;
    align-items: center;
    padding: 0px 20px;
}

.icon{
    margin-left: 5px;
    font-size: 20px;
    color: #f15025;
}

.icon-1{
    color: white;
}

.btn{
    border-right: solid lightgrey 1px;
}

.btn-1{
    background-color: #f15025;
    border-radius: 5px 0px 0px 5px;
    padding: 15px 20px;
    color: white;
}

.btn-w{
    font-weight: 900;
}

.Prep-info{
    display: flex;
    justify-content: space-between;
    width: 90%;
    background-color: #f5f6ea;
    padding: 40px;
    border: solid lightgray 1px;
}

.prep-heading{
    font-weight: 900;
}

.ingredients-container{
    margin-top: 40px;
}

.ingredients-heading{
    font-size: 35px;
    font-weight: 900;
    margin: 20px 0px;
}


li{
    margin-left: 20px;
    margin-bottom: 10px;
    color: black;
}

`;
