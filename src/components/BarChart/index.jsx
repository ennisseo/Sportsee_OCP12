import React from 'react';
import { BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Bar, Legend, Tooltip, Rectangle } from 'recharts';
import '../../styles/charts.css'

const sessions = [
    { day: 1, kilogram: 70, calories: 500 },
    { day: 2, kilogram: 71, calories: 600 },
    { day: 3, kilogram: 68, calories: 356 },
    { day: 4, kilogram: 69, calories: 550 },
    { day: 5, kilogram: 69, calories: 550 },
    { day: 6, kilogram: 69, calories: 550 },
    { day: 7, kilogram: 69, calories: 550 },
    { day: 8, kilogram: 69, calories: 550 },
    { day: 9, kilogram: 69, calories: 550 },
    { day: 10, kilogram: 69, calories: 550 }
];

const CustomCursor = ({ x, y, width, height }) => {
    if (width) width = width / 2
    return (
        <Rectangle
            fill="rgba(0,0,0,0.15)"
            strokeWidth={15}
            x={x}
            y={y}
            width={width}
            height={height}
            transform='translate(25, 0)'
        />
    );
};

const CustomToolTip = ({ active, payload }) => {
    if (active && payload) {
        return (
            <div className="custom-tooltip-line">
                <span className="tooltipPayload">{payload[0].value + "kg"}</span>
                <span className="tooltipPayload">{payload[1].value + "Kcal"}</span>
            </div>
        );
    }
    return null;
};

const DailyChart = () => {
    const formatXAxis = (i) => i + 1;

    return (
        <div className="bar-chart-container">
            <span className="activityTitle">Activité quotidienne</span>
            <ResponsiveContainer width={'99%'} >
                <BarChart
                    data={sessions}
                    margin={{ top: 65, right: 30, bottom: 10, left: -20 }}
                    barGap={8}
                >
                    <CartesianGrid strokeDasharray="1 2" stroke="#ccc" vertical={false} />
                    <XAxis
                        tickLine={false}
                        domain={["dataMin", "dataMax"]}
                        tickMargin={15}
                        tick={{ stroke: "#9B9EAC" }}
                        tickFormatter={formatXAxis}
                        interval={0}
                        padding={{ left: -45, right: -45 }}
                        fontSize={12}
                    />
                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        tickMargin={40}
                        tickCount={3}
                        tickLine={false}
                        tick={{ stroke: "#9B9EAC" }}
                        domain={["dataMin -1", "dataMax +2"]}
                        axisLine={false}
                        dataKey="kilogram"
                        fontSize={12}
                    />
                    <YAxis
                        tickCount={6}
                        domain={[0, "dataMax +50"]}
                        dataKey="calories"
                        axisLine={false}
                        tickLine={false}
                        tick={false}
                        yAxisId="left"
                    />
                    <Bar
                        yAxisId="right"
                        name="Poids (kg)"
                        dataKey="kilogram"
                        radius={[10, 10, 0, 0]}
                        barSize={7}
                        fill="#282D30"
                    />
                    <Bar
                        yAxisId="left"
                        name="Calories brûlées (kCal)"
                        dataKey="calories"
                        radius={[10, 10, 0, 0]}
                        barSize={7}
                        fill="#E60000"
                    />
                    <Legend
                        align="right"
                        verticalAlign="top"
                        iconType="circle"
                        iconSize={8}
                        wrapperStyle={{ top: 0, right: 16 }}
                    />
                    <Tooltip
                        label={sessions}
                        cursor={<CustomCursor width={120} />}
                        wrapperStyle={{ top: -40 }}
                        content={<CustomToolTip active={false} />}
                        offset={35}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
};

export default DailyChart;
