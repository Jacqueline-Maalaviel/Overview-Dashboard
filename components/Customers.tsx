import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const Customers = () => {
    const [chartData, setChartData] = useState({
        labels: ['New Customers', 'Returning Customers'],
        datasets: [
            {
                label: 'Customer Type',
                data: [35, 65],
                backgroundColor: ['#FF6384', '#36A2EB'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB'],
            },
        ],
    });

    const [chartOptions, setChartOptions] = useState({
        plugins: {
            title: {
                display: true,
                text: 'Customer Distribution',
            },
        },
        maintainAspectRatio: false,
        responsive: true,
    });

    return (
        <>
            <div className='w-full md:col-span-1  lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white   flex justify-between  border  rounded-lg'>
                <Pie data={chartData} options={chartOptions} />
            </div>
        </>
    );
};

export default Customers;