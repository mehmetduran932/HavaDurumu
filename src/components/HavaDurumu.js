import "../App.css";
import { Box } from "@chakra-ui/react";
const HavaDurumu = (props) => {
  const { weather } = props;
  console.log(props.weather);
  if (!weather) {
    return <p>Yüleniyor...</p>;
  }
  return (
    <div className="ust-bosluk">
      <Box bg="tomato" w="100%" h="500px" p={4} color="white" className="ortalama">
        <div className="ortala">
          <h3>Şehir:{weather.name}</h3>
          <h4>
            Hava Durumu:
            {weather.weather.map((data) => data.description).join(", ")}
          </h4>
          <p>Derece:{weather.main.temp} °C </p>
          <p>Tarih:{new Date(weather.dt * 1000).toLocaleDateString()}</p>
        </div>
      </Box>
    </div>
  );
};
export default HavaDurumu;
