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
      text: "",
    },
  },
};

const labels = [
  "Gisozi ULK",
  "Kisimeti",
  "Gikondo",
  "Kanombe airport",
  "Down town",
  "Kigali carfree zone",
  "Sonatube",
  "Kicukiro center",
];

export const data = {
  labels,
  datasets: [
    {
      label: "containers' fill levels",
      data: [ 19, 3, 5, 2, 3, 20, 4, 23],
      backgroundColor: "#5e8c31",
    },
  ],
};

export default function ContainerInfoChart() {
  return <Bar options={options} data={data} />;
}
