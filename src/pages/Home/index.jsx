import DurationChart from "../../components/LineChart";
import ScoreChart from "../../components/RadialBarChart";
import DetailsChart from "../../components/RadarChart";
import DailyChart from "../../components/BarChart";
import SideMenu from '../../components/SideMenu';
import '../../styles/index.css'
import BlockKeyData from "../../components/InfoCard";

function App() {
  return (
    <div className="app-container">
      <SideMenu />
      <div className="content-container">
        <h1>
          Bonjour <span>Thomas</span>
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
            <BlockKeyData />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
