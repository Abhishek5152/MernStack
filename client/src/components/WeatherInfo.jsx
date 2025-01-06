import PropTypes from 'prop-types';

const WeatherInfo = ({ city, temperature, description }) => {
  return (
    <div className="card text-center">
      <div className="card-body">
        <h2 className="card-title">Weather App</h2>
        <h3 className="card-subtitle mb-2 text-muted">{city}</h3>
        <p className="card-text">{temperature}°C</p>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

WeatherInfo.propTypes = {
  city: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
};

export default WeatherInfo;
