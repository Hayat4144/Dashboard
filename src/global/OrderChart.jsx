import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Bar, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale,
    LinearScale, BarElement, Title
} from 'chart.js';
import { BASE_URL } from './Base_URL'
import { toastifyoption } from './Notification';
import { toast } from 'react-toastify'
import OrderChartSkeleton from '../animation/OrderChartSkeleton';

export default function OrderChart() {
    const [theme, setTheme] = useState(localStorage.getItem('theme'))
    const [orders, setOrders] = useState([])
    const ChartRef = useRef(null);
    const [Message, SetMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const GetChartData = async () => {
        setIsLoading(true)
        const OrdersResponse = await fetch(`${BASE_URL}/v4/api/seller/order/by/date`, {
            method: "GET",
            headers: {
                'content-type': "application/json"
            },
            credentials: 'include'
        })
        const { data, message, error } = await OrdersResponse.json();
        if (error) return toast.error(error, toastifyoption);
        if (message) return SetMessage(message);
        if (data.length > 0) {
            const updated_data = data.map((order) => {
                return { ...order, date: new Date(order.date) }
            })
            setOrders(updated_data)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        GetChartData();
    }, [])



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
        },
    })

    function chartthemeChange(chart) {
        if (chart) {
            chart.options.defaultFonteColor = "blue";
            chart.update()
        }
    }

    useEffect(() => {
        const chart = ChartRef.current;
        chartthemeChange(chart);
    }, [])



    return (
        <Fragment>
            <div className='bg-white dark:bg-gray-800 dark:border-none shadow-md border my-5 border-gray-300
            rounded-md'>
                <div className='relative h-[50vh]'>
                    {isLoading ? <OrderChartSkeleton /> :
                        !Message ?
                            <Bar
                                ref={ChartRef}
                                data={{
                                    labels: orders.map(order => order.date.toLocaleDateString()),
                                    datasets: [
                                        {
                                            label: 'Total Orders',
                                            data: orders.map(order => order.total),
                                            backgroundColor: "#4c51bf",
                                            borderColor: "#4c51bf",
                                            borderWidth: 1,
                                            maxBarThickness: 20,
                                            borderRadius: 4
                                        },
                                    ],
                                }}
                                options={chartOption} />
                            : <Fragment>
                                <h1 className='text-center font-bold text-xl first-letter:'>{Message}</h1>
                            </Fragment>}

                </div>
            </div>
        </Fragment>
    )
}
