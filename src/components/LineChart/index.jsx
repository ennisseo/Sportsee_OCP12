import React from 'react';
import { LineChart, XAxis, YAxis, Line, Tooltip, ResponsiveContainer } from 'recharts';
import '../../styles/charts.css'

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
            <div className="custom-tooltip">
                <p>{`${duration} min`}</p>
            </div>
        );
    }

    return null;
};

const DurationChart = () => {
    return (
        <div className="line-chart-container">
            <div className="duration-chart-title">Durée moyenne des sessions</div>
            <ResponsiveContainer height="80%">
                <LineChart data={data} >
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "white", opacity: 0.7 }} tickMargin={15} />
                    <YAxis hide={true} domain={["dataMin-20", "dataMax+20"]} />
                    <Line type="natural" dataKey="duration" stroke="white" dot={false} activeDot={{ r: 6 }} strokeWidth={2} />
                    <Tooltip content={<CustomTooltip />} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DurationChart;
