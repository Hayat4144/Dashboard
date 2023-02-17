import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Bar, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale,
    LinearScale, BarElement, Title
} from 'chart.js';

export default function OrderChart() {
    const [theme, setTheme] = useState(localStorage.getItem('theme'))
    const ChartRef = useRef(null);
    const [orders, setOrders] = useState([
        { id: 1, customer: 'John', total: 89.99, date: new Date('2022-02-13') },
        { id: 2, customer: 'Jane', total: 77.99, date: new Date('2022-02-14') },
        { id: 3, customer: 'Bob', total: 767.99, date: new Date('2022-02-14') },
        { id: 4, customer: 'Alice', total: 149.99, date: new Date('2022-02-15') },
        { id: 5, customer: 'Alice', total: 530, date: new Date('2022-02-16') },
        { id: 5, customer: 'Alice', total: 300.29, date: new Date('2022-02-16') },
        { id: 6, customer: 'Alice', total: 250.98, date: new Date('2022-02-07') },
        { id: 8, customer: 'Alice', total: 788.98, date: new Date('2022-02-05') },
        { id: 8, customer: 'Alice', total: 499.18, date: new Date('2022-02-06') },
        { id: 8, customer: 'Alice', total: 100.24, date: new Date('2022-02-07') },
        { id: 8, customer: 'Alice', total: 264.24, date: new Date('2022-02-09') },
        { id: 8, customer: 'Alice', total: 900.35, date: new Date('2022-02-08') },
    ])
    const [trasanction, setTrasanction] = useState([
        {
            id: "1",
            date: "2023-02-16",
            transactions: 7,
            amount: 259.36
        },
        {
            id: "2",
            date: "2023-02-15",
            transactions: 3,
            amount: 283.48
        },
        {
            id: "3",
            date: "2023-02-14",
            transactions: 6,
            amount: 159.73
        },
        {
            id: "4",
            date: "2023-02-13",
            transactions: 2,
            amount: 455.65
        },
        {
            id: "5",
            date: "2023-02-12",
            transactions: 8,
            amount: 356.91
        },
        {
            id: "6",
            date: "2023-02-11",
            transactions: 4,
            amount: 789.63
        },
        {
            id: "7",
            date: "2023-02-10",
            transactions: 5,
            amount: 800.27
        },
        {
            id: "8",
            date: "2023-02-09",
            transactions: 9,
            amount: 873.57
        },
        {
            id: "9",
            date: "2023-02-08",
            transactions: 1,
            amount: 4.84
        },
        {
            id: "10",
            date: "2023-02-07",
            transactions: 3,
            amount: 223.17
        }
    ]
    )

    const [chartData, setChartData] = useState({
        labels: orders.map(order => order.date.toLocaleDateString()),
        datasets: [
            {
                label: 'Order Chart',
                data: orders.map(order => order.total),
                backgroundColor: "#4c51bf",
                borderColor: "#4c51bf",
                color: theme === 'dark' ? 'red' : 'rgb(55 65 81)',
                barThickness: 18,
                borderWidth: 0,
                fill: false,
            },
        ]
    })


    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
    let delayed;

    const [chartOption, setChartOption] = useState({
        maintainAspectRatio: false,
        responsive: true,
        interaction: {
            intersect: false,
            mode: 'index',
        },
        tooltips: {
            mode: "index",
            intersect: false,
        },
        hover: {
            mode: "nearest",
            intersect: true,
        },
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
            }
        },

        scales: {
            x: {
                display: false,
                ticks: {
                    beginAtZero: true,
                    color: "#333",
                    callback: function (value, index, values) {
                        return value;
                    },
                    padding: 2,
                },
            },
            y: {
                ticks: {
                    beginAtZero: true,
                    color: theme === 'dark' ? 'white' : 'black',
                    callback: function (value, index, values) {
                        return value;
                    },
                    padding: 10,
                },

                grid: {
                    drawTicks: true,
                    color: 'rgba(0, 0, 0, 0.1)',
                    borderDash: [2, 2],
                    zeroLineWidth: 1,
                    zeroLineColor: 'rgba(0, 0, 0, 0.25)',
                    drawBorder: true,
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: localStorage.getItem('theme') === 'dark' ? 'rgb(229 231 235)' : 'rgb(55 65 81)',
                    font: {
                        size: 15,
                        family: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif'
                    }
                },
                align: "center",
                position: "bottom",
                padding: 5
            }
        }
    })

    function chartthemeChange(chart){
        if (chart){
            chart.options.defaultFonteColor ="blue" ;
            chart.update()
        }
    }

    useEffect(()=>{
        const chart = ChartRef.current ;
        chartthemeChange(chart) ;
    } ,[])



    return (
        <Fragment>
            <div className='bg-white dark:bg-gray-800 dark:border-none shadow-md border my-10 border-gray-300
            mx-2 md:mx-5 lg:mx-10 rounded-md'>
                <div className='relative h-[50vh]'>
                    <Bar ref={ChartRef} data={chartData} options={chartOption} />
                </div>
            </div>
        </Fragment>
    )
}
