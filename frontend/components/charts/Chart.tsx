import React from "react";
import { BarChart } from "@components/charts";

const Chart = () => {
  const date = new Date();
  const showCurrentDate = () => {
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return month + "-" + year;
  };

  return (
    <div className="flex flex-col">
      <div className=" pt-6 px-7 pb-5 bg-white text-gray-800 font-medium text-xl font rounded-t-[20px] shadow">
        {"Daily Task Timing Chart"}-[{showCurrentDate()}]
      </div>
      <div className="p-5 bg-white text-black rounded-b-[20px] border-t shadow">
        <BarChart />
      </div>
    </div>
  );
};

export default Chart;
