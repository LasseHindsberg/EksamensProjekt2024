
import './App.css';
import OpenWeatherApiDataContainer from './Components/OpenWeatherApiDataContainer';
import RaspberryPiDataContainer from './Components/RaspberryPiDataContainer';


function App() {
  return (
    <div className="pageWrapper">
      <h1>Dashboard</h1>
      <RaspberryPiDataContainer />
      <OpenWeatherApiDataContainer />
    </div>
  );
}

export default App;
