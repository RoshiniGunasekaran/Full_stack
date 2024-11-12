import React from 'react';
import './Contact.css'; // Import the CSS file
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome icons

function SearchBar({ products }) {
  const [searchVal, setSearchVal] = React.useState('');

  // Handler to update search input value
  const handleInput = (e) => {
    setSearchVal(e.target.value);
  };

  // Handler to clear search input
  const handleClearBtn = () => {
    setSearchVal('');
  };

  // Filter products based on search input
  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(searchVal.toLowerCase())
  );

  return (
    <div className="container">
      <div className="input-wrap">
        <i className="fas fa-search"></i>
        <label htmlFor="product-search" id="input-label">
          Product Search
        </label>
        <input
          onChange={handleInput}
          value={searchVal}
          type="text"
          name="product-search"
          id="product-search"
          placeholder="Search Products"
        />
        <i onClick={handleClearBtn} className="fas fa-times"></i>
      </div>
      <div className="results-wrap">
        <ul>
          {filteredProducts.map((product) => (
            <li key={product} className="list-item">
              <a href="#">{product}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function App() {
  const products = [
    'sweet', 'spicy', 'Savory', 'Souri', 'Bitter', 
    'Umami',
  ];

  return <SearchBar products={products} />;
}

export default App;
