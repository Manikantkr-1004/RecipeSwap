import React from 'react'
import styled from "styled-components";

export const Poster = () => {
  return (
    <DIV>
        <div>
            <img className='img' src="https://www.allrecipes.com/thmb/A-u4ckt4ptt4N7GWjYl3KzuWrOw=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2400x600-8965-broccoli-chicken-casserole-mfs_065-2000-2ca307c6cef6467192f260df6edca897.jpg" alt="error" />
        </div>
        <h1 className='heading'>Quick and Easy Recipes</h1>
        <p className='pera'>Explore hundreds of top-rated quick and easy recipes for breakfast, lunch, and dinner.</p>
    </DIV>
  )
}

const DIV = styled.div`
  width: 100%;
  text-align: center;

  .img{
    width: 100%;
  }

  .heading{
    font-size: 50px;
    font-weight: 700;
    margin-top: 20px;
  }

  .pera{
    font-size: 18px;
  }
`
