const WeatherCard = ({ data }) => {
    if (!data) return null;
  
    // Get appropriate background based on weather condition
    const getBackgroundClass = (weather) => {
      const condition = weather.toLowerCase();
      if (condition.includes('clear')) return 'bg-gradient-to-r from-blue-400 to-blue-300';
      if (condition.includes('cloud')) return 'bg-gradient-to-r from-gray-300 to-gray-200';
      if (condition.includes('rain')) return 'bg-gradient-to-r from-gray-500 to-gray-400';
      if (condition.includes('snow')) return 'bg-gradient-to-r from-blue-100 to-gray-100';
      return 'bg-gradient-to-r from-blue-400 to-blue-300';
    };
  
    return (
      <div className="card weather-card mb-4 border-0 shadow-sm">
        <div className="card-body text-center p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="card-title m-0">{data.name}, {data.sys.country}</h2>
            <span className="badge bg-primary rounded-pill">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="temp-value text-primary mb-0">{Math.round(data.main.temp)}°C</div>
              <p className="text-muted">Feels like {Math.round(data.main.feels_like)}°C</p>
            </div>
            <div className="col-md-6">
              <img 
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} 
                alt={data.weather[0].description}
                className="img-fluid"
                style={{ maxHeight: '120px' }}
              />
              <div className="fs-4 text-capitalize">{data.weather[0].description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default WeatherCard;