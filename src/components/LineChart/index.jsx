import React, { useEffect, useState } from 'react';
import { LineChart, XAxis, YAxis, Line, Tooltip, ResponsiveContainer } from 'recharts';
import '../../styles/charts.css'
import {
    getUserSessions,
} from '../../services/apiService.js';

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

// Choose between userId 18 or 12 (current mocked users on the API)
function DurationChart({ userId = 18 }) {
    const [userSessions, setUserSessions] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const sessionsData = await getUserSessions(userId);
                setUserSessions(sessionsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [userId]);

    return (
        <div className="line-chart-container" >
            <div className="duration-chart-title">Durée moyenne des sessions</div>
            <ResponsiveContainer height="80%">
                <LineChart data={userSessions ? userSessions.sessions : []} >
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "white", opacity: 0.7 }} tickMargin={15} padding={{ left: 20, right: 20 }} />
                    <YAxis hide={true} domain={["dataMin-20", "dataMax+20"]} />
                    <Line type="natural" dataKey="sessionLength" stroke="white" dot={false} activeDot={{ r: 6 }} strokeWidth={2} />
                    <Tooltip content={<CustomTooltip />} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DurationChart;
