import { useEffect, useState } from "react";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=saweTJEQWnxQ9goHUuMPO87jUgsmjaxd"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch weather data");
        }
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setWeather(null);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ background: "#1E2343", padding: "20px" }}>
      <h1>Weather</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : weather ? (
        <div>
          <p>Temperature: {weather.timelines.daily[0].values.temperatureAvg}</p>
          <p>
            Pressure:{" "}
            {weather.timelines.daily[0].values.pressureSurfaceLevelAvg}
          </p>
          <p>Wind Speed: {weather.timelines.daily[0].values.windSpeedAvg}</p>
          <p>Humidity: {weather.timelines.daily[0].values.humidityAvg}</p>
        </div>
      ) : null}
    </div>
  );
}
