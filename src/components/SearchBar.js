// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <input
      type="text"
      placeholder="Buscar constancias..."
      value={searchTerm}
      onChange={handleSearch}
      className="mb-4 p-2 w-full border rounded"
    />
  );
};

export default SearchBar;
