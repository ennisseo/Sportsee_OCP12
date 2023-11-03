import React, { useEffect, useState } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import '../../styles/charts.css'
import {
    getUser,
} from '../../services/apiService.js';

// Choose between userId 18 or 12 (current mocked users on the API)
function ScoreChart({ userId = 18 }) {
    const [userScore, setUserScore] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const scoreData = await getUser(userId);
                setUserScore(scoreData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [userId]);

    return (
        <div className="radial-bar-chart-container">
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    data={[{ todayScore: userScore ? userScore.todayScore : 0 }]}
                    innerRadius="70%"
                    outerRadius="70%"
                    barSize={10}
                    startAngle={90}
                    endAngle={450}
                    isAnimationActive={true}
                >
                    <text x={30} y={40} fontWeight={500}>
                        Score
                    </text>
                    <svg viewBox="0 0 100 100" fill="white">
                        <circle cx="50" cy="50" r="calc(35% - 2.5px)" />
                    </svg>
                    <RadialBar
                        label={false}
                        dataKey="todayScore"
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
                            {userScore ? userScore.todayScore : []} %
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
