import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllRecipes } from "../Redux/receipeReducer/action";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RecipeCard } from "../Components/RecipeCard";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { Spinner } from "@chakra-ui/react";
import { Slider } from "../Components/Slider";
import { Social } from "../Components/Social";
import { Helmet } from "react-helmet";

export function RecipeList() {

  const dispatch = useDispatch();
  const recipes = useSelector((store) => store.recipeReducer.recipes);
  const loading = useSelector((store) => store.recipeReducer.loading);

  useEffect(()=>{
   setTimeout(()=>{
    if(recipes.length === 0){
      dispatch(getAllRecipes());
    }
   }, 500);
  },[])

  return (
    <div>
      <Helmet>
        <title>RecipeList | RecipeSwap</title>
      </Helmet>
      <Navbar />
      <HEADER>
        <section className="slider">
          <Slider />
        </section>
        <section className="page-information">
          <h1 className="heading">
            "Savor the Flavors: Irresistible Recipes at Your Fingertips"
          </h1>
          <p className="page-desc">
            "Explore a world of culinary delights with our recipe website, where
            gastronomic inspiration meets step-by-step guidance. From timeless
            classics to innovative creations, embark on a flavorful journey that
            caters to both novice cooks and seasoned chefs."
          </p>
          <Social />
        </section>
      </HEADER>
      {loading ? (
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

        <DIV>
          <div className="grid">
            {recipes.length > 0 &&
              recipes?.map((el, i) => <RecipeCard key={i} {...el} />)}
          </div>
        </DIV>
      )}
      <Footer />
    </div>
  );
}

const DIV = styled.div`
  display: flex;
  justify-content: center;

  .grid {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
  }

  @media (max-width: 1250px) {
    .grid {
      display: grid;
      place-items: center;
      grid-template-columns: repeat(3, 1fr);
      grid-row-gap: 20px;
      grid-column-gap: 20px;
    }
  }

  @media (max-width: 900px) {
    .grid {
      display: grid;
      place-items: center;
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 20px;
      grid-column-gap: 20px;
    }
  }

  @media (max-width: 610px) {
    .grid {
      display: grid;
      place-items: center;
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 0px;
      grid-column-gap: 20px;
    }
  }
`;

const HEADER = styled.div`
  .page-information {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    margin-top: 30px;
  }

  .heading {
    font-size: 30px;
    width: 500px;
    text-align: center;
    font-weight: 900;
  }

  .page-desc {
    text-align: center;
    width: 90%;
    margin: 20px 0px;
  }

  @media (max-width: 610px) {
    .heading {
    font-size: 20px;
    width: 300px;
    text-align: center;
    font-weight: 900;
  }

  .page-desc {
    text-align: center;
    width: 90%;
    margin: 20px 0px;
    font-size: 15px;
  }

  }
`;

const SPINNER = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
