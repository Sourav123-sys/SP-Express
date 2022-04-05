import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../../Hooks/useData';
import './DashBoard.css'
const DashBoard = () => {
    const [chart]= useData()
    return (
    <>
    <h1 className='text-center text-4xl mt-5 color'>DashBoard</h1>
    <div className='mt-5'>
    <h1 className='text-4xl text-center mt-5 chart-1'>Invesment vs Revenue</h1>
  <BarChart width={1000} height={350} data={chart}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" fill="#8884d8" />
        <Bar dataKey="revenue" fill="#82ca9d" />
      </BarChart>
    </div>

    <div>
    <h1 className='text-4xl text-center mt-5 chart-1'>Month Wise Sell</h1>
    <LineChart width={1000} height={350} data={chart}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="investment" stroke="#8884d8" />
  <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
</LineChart>
    </div>

    <div>
     <h1 className='text-4xl text-center mt-5 chart-1'>Invesment vs Revenue</h1>
    <AreaChart width={1000} height={350} data={chart}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="month" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
    </div>

    <div>
    <h1 className='text-4xl text-center mt-5 chart-1'>Invesment vs Revenue</h1>
    <PieChart width={1000} height={350}>
  <Pie data={chart} dataKey="investment"  cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={chart} dataKey="revenue"  cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
        </div>
    </>
    );
};

export default DashBoard;