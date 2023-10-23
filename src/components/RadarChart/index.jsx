import React from 'react';
import { RadarChart, PolarGrid, PolarRadiusAxis, Radar, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import '../../styles/charts.css'

const data = [
    { kind: 'Intensité', value: 25 },
    { kind: 'Vitesse', value: 95 },
    { kind: 'Force', value: 50 },
    { kind: 'Endurance', value: 80 },
    { kind: 'Energie', value: 80 },
    { kind: 'Cardio', value: 40 }
];

const CustomTick = ({ payload, x, y, textAnchor, stroke }) => {
    if (y) y = y + 3
    return (
        <g className="recharts-layer recharts-polar-angle-axis-tick">
            <text
                stroke={stroke}
                y={y}
                fontSize="0.75rem"
                fontWeight="500"
                className="recharts-text recharts-polar-angle-axis-tick-value"
                textAnchor={textAnchor}
            >
                <tspan x={x} style={{ fill: "white" }}>
                    {payload?.value}
                </tspan>
            </text>
        </g>
    );
};

const DetailsChart = () => {
    return (
        <div className="radar-chart-container">
            <ResponsiveContainer width={'100%'}>
                <RadarChart outerRadius={85} data={data}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis
                        dataKey="kind"
                        tick={<CustomTick />}
                        tickSize={12}
                        orient="top"
                    />
                    <PolarRadiusAxis
                        angle={30}
                        domain={[0, "dataMax+20"]}
                        tick={false}
                        axisLine={false}
                    />
                    <Radar dataKey="value" fill="#ff0101" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DetailsChart;
