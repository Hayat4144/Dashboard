import React, { Fragment, useState, useRef } from 'react'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

export default function Sell_Transaction() {
    Chart.register(ArcElement, Tooltip, Legend);
    const [theme, setTheme] = useState(localStorage.getItem('theme'))
    const ChartRef = useRef(null);
    const [Chartdata, setChartdata] = useState({
        labels: [
            'Sell',
            'Transaction'
        ],
        datasets: [
            {
                data: [300, 34],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                ],
                hoverOffset: 4,
                borderColor: "#4c51bf",
                color: theme === 'dark' ? 'red' : 'rgb(55 65 81)',
                barThickness: 18,
                borderWidth: 0,
                fill: false,
            }
        ]
    })
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


    return (
        <Fragment>
            <div className='bg-white dark:bg-gray-800 dark:border-none shadow-md border my-5 border-gray-300 rounded-md py-2 '>
                <Doughnut data={Chartdata} options={chartOption} ref={ChartRef} />
            </div>
        </Fragment>
    )
}
