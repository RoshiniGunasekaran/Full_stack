import React, { useState } from 'react';
import './COntact.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    console.log('Search Term:', searchTerm);
    // Add your search logic here
  };

  return (
    <div className="App">
      <div className={`menu ${searchTerm ? 'active' : ''}`}>
        <div className="icon-menu">
          <img
            
            height="30"
            alt="menu icon"
          />
        </div>
        <ul className="nav">
          <li><a href="#">News</a></li>
          <li><a href="#">Videos</a></li>
          <li><a href="#">Articles</a></li>
          <li><a href="#">Images</a></li>
          <li><a href="#">Maps</a></li>
        </ul>
      </div>

      <div className="main">
        <h1>Heat & Eat</h1>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="col-xs-offset-3 col-xs-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <span className="input-group-btn">
              <button
                className="btn bt-default"
                type="button"
                onClick={handleSearchSubmit}
              >
                Go!
              </button>
            </span>
          </div>
        </div>
      </form>

      <br /><br />
      
      <div className="extra">
        <a href="#"><h4>Expand Your Search</h4></a>
      </div>

      <nav className="navbar navbar-inverse navbar-fixed-bottom">
        <div className="container-fluid">
          
        </div>
      </nav>
    </div>
  );
}

export default App;
