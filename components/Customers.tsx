import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import { text } from "stream/consumers";

type data = [
  {name: string, value: number}
]

const data = [
  {name: "New Costumers", value: 80 },
  {name: "Returning Customers", value: 60}
];



const Customers = () => {
  
  
  return (
    <div className='w-full md:col-span-1 lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white flex justify-between border rounded-lg'>
      <PieChart width={800} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          fill="#bb8fce"
          outerRadius={150}
          innerRadius={5}
          label
          />
          

        <Tooltip  />
      </PieChart>
    </div>
  );
};

export default Customers;