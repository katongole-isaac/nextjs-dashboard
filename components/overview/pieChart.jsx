/**
 * Pie Chart Component
 *
 */
import * as ChartJs from "chart.js";
import _ from "lodash";
import { Line, Pie, PolarArea } from "react-chartjs-2";

const PieChart = ({ data }) => {

  return (
    <Pie
      data={{
        labels: data.map((item) => item.currencyPair),
        datasets: [
          {
            label: "Currency Pair",
            data: data.map((item) => item.baseVolume),
          },
        ],
      }}
    />
  );
};

export default PieChart;
