import { useState } from 'react';
import react from 'react';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (city.trim()) {
        onSearch(city);
      }
    };
  
    return (
      <div className="mb-4">
        <form onSubmit={handleSubmit} className="search-bar">
          <div className="input-group">
            <input
              type="text"
              className="form-control search-input py-3"
              placeholder="Search for a city..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="btn btn-primary search-button px-4" type="submit">
              <i className="bi bi-search"></i> Search
            </button>
          </div>
        </form>
      </div>
    );
  };
  
export default SearchBar;