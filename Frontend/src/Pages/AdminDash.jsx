import { Box, Flex, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AdminHeader } from "../Components/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import { findAggregate, getTokenCookie } from "../Redux/adminReducer/action";
import LineChart from "../Components/LineChart";
import PieChart from "../Components/PieChart";
import DoughnutChart from "../Components/DoughnutChart";
import { styled } from "styled-components";
import Cookies from "js-cookie";
import { Helmet } from 'react-helmet';


export function AdminDash() {
  const dispatch = useDispatch();
  const [sort, setSort] = useState("");
  const {maxPost, recipeType, cuisine } = useSelector(
    (store) => store.AdminReducer
  );

  const [dataArray, setDataArray] = useState([]);
  const [dataRecipeType, setDataRecipeType] = useState([]);
  const [dataCuisine, setDataCuisine] = useState([]);
  useEffect(()=>{
    const token = Cookies.get('login_token');
    getTokenCookie(token);
  }, []);
  useEffect(()=>{
     setTimeout(()=>{
      dispatch(findAggregate(sort));
     }, 300);
    
  }, [sort]);

  useEffect(()=>{
    if (maxPost !== undefined) {
      setDataArray(maxPost);
    }
  }, [maxPost]);
  useEffect(()=>{
    if (recipeType !== undefined) {
      setDataRecipeType(recipeType);
    }
  }, [recipeType]);
  useEffect(()=>{
    if (cuisine !== undefined) {
      setDataCuisine(cuisine);
    }
  }, [cuisine]);

  return (
    <SPAN>
      <Helmet>
        <title>AdminDashboard | RecipeSwap</title>
      </Helmet>
      <AdminHeader />
      <Box
        bg={"brand.600"}
        borderRadius={"1rem"}
        p={"3rem"}
        w={"95%"}
        margin={'auto'}
        mt={"-5rem"}
        className="animate__animated animate__slideInUp"
      >
       <Box mb={"5rem"} borderRadius={"1rem"} bg={"brand.400"} p={"2rem"}>
       {dataArray.length > 0 && <LineChart state={sort} setState={setSort} dataArray={dataArray} />}
       </Box>
       <Flex justifyContent={'space-evenly'} className="charts">
       <Box mb={"5rem"} borderRadius={"1rem"} bg={"brand.400"} p={"2rem"} className="chartBox" >
       {dataRecipeType.length > 0 && <PieChart dataArray={dataRecipeType} />}
       </Box>
       <Box mb={"5rem"} borderRadius={"1rem"} bg={"brand.400"} p={"2rem"}className="chartBox" >
       {dataCuisine.length > 0 && <DoughnutChart dataArray={dataCuisine} />}
       </Box>
       </Flex>
      </Box>
    </SPAN>
  );
}

const SPAN = styled.span`
.chartBox{
  width: 40%;
}
  @media screen and (max-width : 769px){
    .charts{
      flex-direction: column;
  }
  .chartBox{
  width: 100%;
}
  }
`
