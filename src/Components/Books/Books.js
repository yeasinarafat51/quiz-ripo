import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Books.css'




const Books = () => {
    const data =  [
        {
        "id": 1,
        "name": "React",
        
        "total": 8
        },
        {
        "id": 2,
        "name": "JavaScript",
       
        "total": 9
        },
        {
        "id": 4,
        "name": "CSS",
        
        "total": 8
        },
        {
        "id": 5,
        "name": "Git",
        
        "total": 11
        }
        ]
    // console.log(DataLoder)
    return (
        <div className='rechart'>
            <LineChart width= {500} height={400} data={data}>
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
            </LineChart>
            
        </div>
    );
};

export default Books;