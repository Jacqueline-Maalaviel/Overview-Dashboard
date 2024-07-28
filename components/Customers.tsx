import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

type data = [
  {name: string, value: number}
]

const data = [
  {name: "New Costumers", value: 400 },
  {name: "Returning Customers", value: 378}
];



const Customers = () => {
  
  
  return (
    <div className='w-full md:col-span-1 lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white flex justify-between border rounded-lg'>
      <PieChart width={1000} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={200}
          fill="#e6b0aa"
          label />

        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Customers;