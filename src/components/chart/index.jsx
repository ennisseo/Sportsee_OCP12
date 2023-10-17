import React from 'react';
import { LineChart, XAxis, Line, Tooltip } from 'recharts';

const data = [
    { day: 'L', duration: 30 },
    { day: 'M', duration: 23 },
    { day: 'M', duration: 45 },
    { day: 'J', duration: 50 },
    { day: 'V', duration: 0 },
    { day: 'S', duration: 0 },
    { day: 'D', duration: 60 }
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const duration = payload[0].value;

        return (
            <div className="custom-tooltip" style={{ background: 'white', padding: '10px', border: '1px solid #ccc' }}>
                <p>{`${duration} min`}</p>
            </div>
        );
    }

    return null;
};

const MyChart = () => {
    return (
        <LineChart width={600} height={300} data={data}>
            <XAxis dataKey="day" />
            <Line type="monotone" dataKey="duration" stroke="#8884d8" dot={false} activeDot={{ r: 8 }} />
            <Tooltip content={<CustomTooltip />} />
        </LineChart>
    );
};

export default MyChart;
