import "/Users/andrewsantanastaso/code/ga/labs/react-components-lab/src/WeatherForcast.css";
const WeatherForecast = (props) => {
  return (
    <div className="weather">
      <h2>{props.weather.day}</h2>
      <img src={props.weather.img} alt={props.weather.altImg} />
      <p>
        <span></span>
        {props.weather.conditions}
      </p>
      <p>
        <span></span>
        {props.weather.time}
      </p>
    </div>
  );
};

export default WeatherForecast;
