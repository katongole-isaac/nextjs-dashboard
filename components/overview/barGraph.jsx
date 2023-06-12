/**
 * Bar Graph component
 *
 */

import Chart from "chart.js/auto";

import { Bar } from "react-chartjs-2";
import { signalColors } from "./color";

const BarGraph = ({ data }) => {
  const setBgColor = (ctx) =>
    ctx.parsed.y > 0 ? signalColors[1] : signalColors[0];


  return (
    <Bar
      data={{
        labels: data.map((item) => new Date(item.created).getMinutes()),
        datasets: [
          {
            id: 1,
            label: "Stock Markets",
            data: data.map((item) => item.changeFromPrevious),
            backgroundColor: setBgColor,
          },
        ],
      }}
    />
  );
};

export default BarGraph;
