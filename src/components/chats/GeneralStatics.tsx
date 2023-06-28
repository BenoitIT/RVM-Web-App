import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "MONTHLY RECYCLING CONTRIBUTION BY LOCATION",
    },
  },
};

const labels = [
  "Huye",
  "Remera",
  "Gikondo",
  "Muhanga",
  "Rusizi",
  "Downtown",
  "Rusizi",
  "Nyamata",
  "Gisozi ULK",
  "sonatube",
  "Kigali city market",
  "Giporoso",
  "Kanombe airport",
  "Rubavu",
  "Musanze",
  "Kimironko",
  "Kacyiru ",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Rewards statistics",
      data: [10, 14, 3, 5, 12, 3, 20, 4, 23, 4, 5, 12, 3, 20, 4, 23, 4],
      backgroundColor: "#a5b6a7",
    },
    {
      label: "Contribution statistics",
      data: [12, 19, 3, 5, 2, 3, 20, 4, 23, 4, 5, 12, 3, 20, 4, 23, 4],
      backgroundColor: "#5e8c31",
    },
  ],
};

export default function GenaralChart() {
  return <Bar options={options} data={data} />;
}
