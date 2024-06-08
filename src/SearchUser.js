// src/SearchUser.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchUser() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (username.trim()) {
      navigate(`/user/${username}`);
    }
  };

  return (
    <div className="search-user">
      <h1>GitHub Explorer</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchUser;
