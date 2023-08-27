import React, { useState } from "react";
import { CategoryScale, Chart, registerables } from "chart.js";

import { Line } from "react-chartjs-2";
import {  Flex, Heading, Select } from "@chakra-ui/react";

Chart.register(CategoryScale);
Chart.register(...registerables);



const LineChart = ({dataArray,state, setState}) => {

    const labels = dataArray.map(item => item._id);
    const value =   dataArray.map(item => item.count);
    const data = {
        labels: labels,
        datasets: [
          {
            label: "User Posts",
            backgroundColor: "#ff8f49",
            borderColor:"#ff8f49",
            data: value,
          },
        ],
      };
  return (
    <>
   <Flex justifyContent={"space-between"}>
   <Heading  fontWeight={'normal'}fontSize={"2rem"}   textAlign={'center'}>Users Post</Heading>
      <Flex>
        <Select value={state} onChange={(e)=> setState(e.target.value)}>
          <option value={""}>Sort By</option>
          <option value={"1"}>Incremental</option>
          <option value={"-1"}>Decremental</option>
        </Select>
      </Flex>
   </Flex>
      <Line data={data} />
    </>
  );
};

export default LineChart;