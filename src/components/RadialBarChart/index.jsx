import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import '../../styles/charts.css'

const data = [
    { name: 'score', uv: 12 },
];

const ScoreChart = () => {
    return (
        <div className="radial-bar-chart-container">
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    data={data}
                    innerRadius="70%"
                    outerRadius="70%"
                    barSize={10}
                    startAngle={90}
                    endAngle={450}
                    isAnimationActive={true}
                >
                    <text x={30} y={40}>
                        Score
                    </text>
                    <svg viewBox="0 0 100 100" fill="white">
                        <circle cx="50" cy="50" r="calc(35% - 2.5px)" />
                    </svg>
                    <RadialBar
                        label={false}
                        dataKey="uv"
                        cornerRadius={5}
                        isAnimationActive={true}
                        fill="red"
                    />
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        tick={false}
                        isAnimationActive={true}
                    />
                    <text textAnchor="middle">
                        <tspan x="50%" y="50%" textAnchor="middle" opacity="1" fontSize={25} fontWeight={700}>
                            {data[0].uv} %
                        </tspan>
                        <tspan x="50%" y="58%" textAnchor="middle" opacity="0.5">
                            de votre
                        </tspan>
                        <tspan x="50%" y="64%" textAnchor="middle" opacity="0.5">
                            objectif
                        </tspan>
                    </text>
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ScoreChart;
