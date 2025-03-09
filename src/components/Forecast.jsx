const Forecast = ({ data }) => {
    if (!data || !data.list) return null;
  
    // Get one forecast per day (at noon)
    const dailyForecast = data.list.filter((forecast, index) => index % 8 === 0).slice(0, 5);
  
    return (
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h3 className="card-title mb-4">5-Day Forecast</h3>
          <div className="row">
            {dailyForecast.map((day, index) => {
              const date = new Date(day.dt * 1000);
              return (
                <div className="col forecast-day text-center" key={index}>
                  <div className="fw-bold mb-2">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                  <img 
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} 
                    alt={day.weather[0].description}
                    className="mb-2"
                  />
                  <div className="mb-1 fw-bold">{Math.round(day.main.temp)}°C</div>
                  <div className="small text-muted text-capitalize">{day.weather[0].description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  export default Forecast;