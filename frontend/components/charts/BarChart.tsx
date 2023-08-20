import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { chartData } from "@constants/dashboard";

const BarChart = () => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const numberOfDays = new Date(year, month, 0).getDate();
  const daysArray = Array.from({ length: numberOfDays }, (_, i) => i + 1);

  Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    ChartDataLabels
  );
  const data = {
    labels: daysArray,
    datasets: [
      {
        label: "dataset",
        data: chartData,
        backgroundColor: ["rgb(38, 159, 251)"],
        borderColor: ["rgb(38, 159, 251)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-5">
      <Bar
        className="min-h-[365px]"
        data={data}
        options={{
          maintainAspectRatio: false,
          plugins: {
            datalabels: {
              anchor: "center",
              color: "#455560",

              formatter: Math.round,
              font: {
                weight: "bold",
              },
            },
            title: {
              display: true,
              text: "Daily Task Timing Chart Of This Month (Hours)",
              color: "#455560",
              position: "bottom",
              font: {
                weight: "600",
                size: 15,
              },
            },
          },

          scales: {
            x: {
              position: "top",
              grid: {
                display: false,
                drawTicks: false,
              },
            },
            y: {
              ticks: {
                display: false,
                maxTicksLimit: 8,
              },
              border: {
                display: false,
              },
              grid: { drawTicks: false },
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};
export default BarChart;
