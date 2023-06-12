/**
 * Bar Graph component
 *
 */

import * as ChartJs from "chart.js/auto";

import { Bar } from "react-chartjs-2";
import { signalColors } from "./color";

const BarGraph = ({ data }) => {
 

  const setBgColor = (ctx) => ctx.parsed.y > 0 ? signalColors[1] : signalColors[0];

  const chartConfigs = {
    labels: data.map((item) => new Date(item.created).getMinutes()),
    datasets: [
      {
        id: 1,
        label: "Stock Markets",
        data: data.map((item) => item.changeFromPrevious),
        backgroundColor: setBgColor,
        
      },
    ],
  };

  

  return <Bar data= {...chartConfigs}  />
};

export default BarGraph;
