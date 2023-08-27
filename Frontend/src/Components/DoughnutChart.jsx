import React from "react";
import { CategoryScale, Chart, registerables } from "chart.js";

import { Doughnut, Pie } from "react-chartjs-2";
import { Heading } from "@chakra-ui/react";
Chart.register(CategoryScale);
Chart.register(...registerables);
const DoughnutChart = ({dataArray}) => {
    const labels = dataArray.map(item => item._id);
    const value =   dataArray.map(item => item.count);
    const data = {
        labels: labels,
        datasets: [
          {
            label: "Total Recipes",
            backgroundColor: [  'rgba(255, 90, 126, 0.837)',
            'rgba(54, 163, 235, 0.976)',
            'rgba(255, 207, 86, 0.935)',
            'rgba(75, 192, 192, 0.861)',
            'rgba(153, 102, 255, 0.891)',
            'rgba(255, 160, 64, 0.883)'],
            borderColor: "#f5f5f5",
            data: value,
          },
        ],
      };
  return (
    <>
      <Heading m={"1rem"} fontSize={"2rem"}  fontWeight={'normal'} textAlign={'center'}>Cuisine</Heading>
      <Doughnut data={data} />
    </>
  );
};
export default DoughnutChart;