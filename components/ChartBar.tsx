import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    Amount: 2400,
  },
  {
    name: 'Tue',
    Amount: 2210,
  },
  {
    name: 'Wed',
    Amount: 2290,
  },
  {
    name: 'Thurs',
    Amount: 2000,
  },
  {
    name: 'Fri',
    Amount: 1181,
  },
  {
    name: 'Sat',
    Amount: 2500,
  },
  {
    name: 'Sun',
    Amount: 2100,
  },
];


const ChartBar = () => {

    return (
      <div className='w-full md:col-span-1  lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white   flex justify-between  border  rounded-lg'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Amount" fill="#bb8fce" activeBar={<Rectangle fill="#7fb3d5" stroke="blue" />} />
          
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
  }


  export default ChartBar;
