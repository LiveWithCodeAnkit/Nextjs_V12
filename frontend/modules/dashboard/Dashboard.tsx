import React, { useEffect, useContext } from "react";
import { cards } from "@constants/dashboard/cards";
import { Card } from "@components/cards";
import { Chart } from "@components/charts";

const Dashboard = () => {
  return (
    <div className="bg-Background h-full flex flex-col gap-[30px]">
      <div className=" text-blue-500 flex gap-6 box-border max-sm:flex-wrap font-semibold text-[15px]">
        {cards.map((item, index) => (
          <Card {...item} key={`${index}`} />
        ))}
      </div>
      <Chart />
    </div>
  );
};

export default Dashboard;
