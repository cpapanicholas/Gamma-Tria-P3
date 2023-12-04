import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); // Default filter value

  const handleSearch = () => {
    // Perform the search logic here using 'searchTerm' and 'filter'
    console.log('Searching for:', searchTerm, 'with filter:', filter);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div>
      <div className="">
        <h4 className="card-header bg-dark text-light p-2">Library</h4>
      </div>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-8 col-md-8 mb-2">
            <div className="card mb-2">
              <div className="card-body">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-control"
                  />
                  <div className="input-group-append">
                    <button onClick={handleSearch} className="btn btn-primary">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 col-md-4 mb-2">
            <div className="card mb-2">
              <div className="card-body">
                <div className="input-group">
                  <label className="input-group-text" htmlFor="filterDropdown">
                    Filter:
                  </label>
                  <select
                    id="filterDropdown"
                    value={filter}
                    onChange={(e) => handleFilterChange(e.target.value)}
                    className="form-control"
                  >
                    <option value="all">All</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default SearchBar;
