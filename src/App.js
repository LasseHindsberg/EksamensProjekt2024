
import './App.css';
import OpenWeatherApiDataContainer from './Components/OpenWeatherApiDataContainer';
import RaspberryPiDataContainer from './Components/RaspberryPiDataContainer';


function App() {
  return (
    <div className="App">
      <h1>Weather App + car Crash handler</h1> 
      <p>weather data:</p>
      <RaspberryPiDataContainer />
      <OpenWeatherApiDataContainer />
    </div>
  );
}

export default App;
