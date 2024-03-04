import React from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);
export default function ChartData() {
  const data = {
    labels: [
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
      "January",
    ],
    datasets: [
      {
        label: "Views",
        data: [46, 42, 48, 44, 63, 77, 72, 81, 66, 76, 73, 74],
        backgroundColor: "#3faa58",
        borderColor: "#102E1E",
        pointBorderColor: "#3faa58",
      },
    ],
  };
  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 0,
        max: 120,
      },
    },
  };
  return (
    <>
      <div>
        <Line data={data} options={options}></Line>
      </div>
    </>
  );
}
