const WeatherDetails = ({ data }) => {
    if (!data) return null;
  
    const details = [
      { icon: 'bi-thermometer-half', label: 'Feels Like', value: `${Math.round(data.main.feels_like)}°C` },
      { icon: 'bi-droplet-fill', label: 'Humidity', value: `${data.main.humidity}%` },
      { icon: 'bi-wind', label: 'Wind', value: `${Math.round(data.wind.speed)} m/s` },
      { icon: 'bi-speedometer2', label: 'Pressure', value: `${data.main.pressure} hPa` }
    ];
  
    return (
      <div className="card mb-4 border-0 shadow-sm">
        <div className="card-body">
          <h3 className="card-title mb-4">Weather Details</h3>
          <div className="row">
            {details.map((detail, index) => (
              <div className="col-6 col-md-3 mb-3" key={index}>
                <div className="d-flex align-items-center">
                  <div className="bg-light rounded-circle p-3 me-3">
                    <i className={`bi ${detail.icon} text-primary`}></i>
                  </div>
                  <div>
                    <div className="text-muted small">{detail.label}</div>
                    <div className="fs-5 fw-bold">{detail.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default WeatherDetails;