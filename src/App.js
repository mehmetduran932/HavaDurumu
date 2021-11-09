import axios from "axios";
import { useEffect, useState } from "react";
import { usePosition } from "use-position";
import HavaDurumu from "./components/HavaDurumu";
import { Spinner } from "@chakra-ui/react";
const App = () => {
  const [weather, setWeather] = useState();
  const { latitude, longitude } = usePosition();
  const [loading, setLoading] = useState(true);
  const getWeatherData = async (lat, lon) => {
    try {
      const key = "83eb8a21418662ecacd47fee7c3e2159";
      const lang = navigator.language.split("-")[0];

      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`
      );
      setWeather(data);
      setLoading(false);
    } catch {
      alert("Veri Alınırken Hata oluştu");
      setLoading(false);
    }
  };
  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
    
  }, [latitude, longitude]);
  console.log(weather)
  return (
    <div className="ortala">
      {loading ? (
        <Spinner color="blue.500"/>
      ) : (
        <HavaDurumu weather={weather} />
      )}
    </div>
  );
};
export default App;
