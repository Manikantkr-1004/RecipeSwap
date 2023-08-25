import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllRecipes } from '../Redux/receipeReducer/action';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { RecipeCard } from '../Components/RecipeCard';
import { Navbar } from "../Components/Navbar";

export function RecipeList() {
    const dispatch = useDispatch();
    const recipes = useSelector((store) => store.recipeReducer.recipes);

    useEffect(()=>{
        dispatch(getAllRecipes());
    },[]) 

    return (
        <div>
        <Navbar/>
        <DIV>
            {
                recipes.length > 0 && recipes?.map((el,i) => <RecipeCard key={i} {...el}/>)
            }
        </DIV>
        </div>
    )
}

const DIV = styled.div`
width: 80%;
margin: 20px auto;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-row-gap: 20px;

`;
