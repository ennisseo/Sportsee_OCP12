import React, { useEffect, useState } from 'react';
import DurationChart from "../../components/LineChart";
import ScoreChart from "../../components/RadialBarChart";
import DetailsChart from "../../components/RadarChart";
import DailyChart from "../../components/BarChart";
import SideMenu from '../../components/SideMenu';
import NutriInfoPanel from "../../components/InfoCard";
import {
  getUser,
} from '../../services/apiService.js';

function App() {
  const [userData, setUserData] = useState(null);
  const userId = 18; // API data currently allows to use userId 18 or 12

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await getUser(userId);
        setUserData(userData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [userId]);

  return (
    <div className="app-container">
      <SideMenu />
      <div className="content-container">
        <h1>
          Bonjour <span>{userData?.userInfos?.firstName}</span>
        </h1>
        <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
        <div className="main-layout">
          <div className="left-layout">
            <DailyChart />
            <div className="mini-charts-container">
              <DurationChart />
              <DetailsChart />
              <ScoreChart />
            </div>
          </div>
          <div className="right-layout">
            <NutriInfoPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
