import React from "react";
import { CategoryScale, Chart, registerables } from "chart.js";

import { Pie } from "react-chartjs-2";
import { Heading } from "@chakra-ui/react";
Chart.register(CategoryScale);
Chart.register(...registerables);
const PieChart = ({dataArray}) => {
    const labels = dataArray.map(item => item._id);
    const value =   dataArray.map(item => item.count);
    const data = {
        labels: labels,
        datasets: [
          {
            label: "Recipe Type",
            backgroundColor: [ "rgba(255, 0, 0, 0.665)", "rgba(55, 255, 0, 0.608)"],
            borderColor: "#f5f5f5",
            data: value,
          },
        ],
      };
  return (
    <>
      <Heading m={"1rem"} fontWeight={'normal'} fontSize={"2rem"} textAlign={'center'}>Recipe Type</Heading>
      <Pie data={data} />
    </>
  );
};
export default PieChart;