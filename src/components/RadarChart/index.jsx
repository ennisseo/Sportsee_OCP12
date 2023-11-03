import React, { useEffect, useState } from 'react';
import { RadarChart, PolarGrid, PolarRadiusAxis, Radar, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import '../../styles/charts.css'
import {
    getUserPerformance,
} from '../../services/apiService.js';

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

// Choose between userId 18 or 12 (current mocked users on the API)
function DetailsChart({ userId = 18 }) {
    const [userPerformance, setUserPerformance] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const performanceData = await getUserPerformance(userId);
                setUserPerformance(performanceData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [userId]);

    return (
        <div className="radar-chart-container">
            <ResponsiveContainer width={'100%'}>
                <RadarChart outerRadius={85} data={userPerformance ? userPerformance.performance : []}>
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
