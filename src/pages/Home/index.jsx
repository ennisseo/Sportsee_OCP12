import MyChart from "../../components/chart";
import SideMenu from '../../components/Side-menu';
import '../../styles/index.css'

function App() {
  return (
    <div className="app-container">
      <SideMenu />
      <div className="content-container">
        <h1>
          Bonjour Thomas
        </h1>
        <MyChart />
      </div>
    </div>
  );
}

export default App;
