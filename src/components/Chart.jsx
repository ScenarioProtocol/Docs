"use client"

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'

const DynamicChart = dynamic(
    () => import("react-apexcharts"),
    { ssr: false } 
)

const PieChart = () => {

    const [loaded, setLoaded] = useState(false)
    const [options, setOptions] = useState(null)

    useEffect(() => {
        setOptions({
            labels: [
                'Protocol Users',
                'Founding Team',
                'Backers',
                'Builder Bounty Fund',
                'Partnering Fund',
                'Advisors'
            ],
            chart: {
                type: "donut",
                width: '100%',
            },
            colors: ["#508181", "#506d81", "#525081", "#6d5081", "#81506d", "#816550"],
            legend: {
                show: false,
            },
            stroke: {
                show: false,
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: '100%',
                        },
                        legend: {
                            position: "bottom",
                        },
                    },
                },
            ],
        })
        setLoaded(true)
    }, [])

    return (
        <div className='flex flex-col lg:flex-row gap-x-4 mt-8 justify-center items-center'>
            <div className=''>
                {loaded && (
                    <DynamicChart
                        options={options}
                        type="donut"
                        width="350"
                        series={[60, 13, 12, 7, 6, 2]}
                    />
                )}
            </div>
            <div className='text-left items-start'>
                <table className='table-auto mt-0'>
                    <tbody>
                        <tr>
                            <td>60%</td>
                            <td><span className='text-[#508181]'>Protocol Users</span></td>
                            <td>4 year distribution, 1-year linear vest</td>
                        </tr>
                        <tr>
                            <td>13%</td>
                            <td><span className='text-[#506d81]'>Founding Team</span></td>
                            <td>Distributed at TGE, vesting period applies</td>
                        </tr>
                        <tr>
                            <td>12%</td>
                            <td><span className='text-[#525081]'>Backers</span></td>
                            <td>Distributed at TGE, vesting period applies</td>
                        </tr>
                        <tr>
                            <td>7%</td>
                            <td><span className='text-[#6d5081]'>Builder Bounty Fund</span></td>
                            <td>Fully liquid at TGE, issued at the discretion of founding team</td>
                        </tr>
                        <tr>
                            <td>6%</td>
                            <td><span className='text-[#81506d]'>Community Marketing & Partnering Fund</span></td>
                            <td>Fully liquid at TGE, issued at the discretion of founding team</td>
                        </tr>
                        <tr>
                            <td>2%</td>
                            <td><span className='text-[#816550]'>Advisors</span></td>
                            <td>Distributed at TGE, vesting period applies</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )   
};

export default PieChart;