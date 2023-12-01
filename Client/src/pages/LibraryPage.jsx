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
    <header>
        
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        <label>
          Filter:
          <select value={filter} onChange={(e) => handleFilterChange(e.target.value)}>
            <option value="all">All</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            {/* Add more options as needed */}
          </select>
        </label>
      </div>
    </header>
  );
};

export default SearchBar;
