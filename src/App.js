// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchUser from './SearchUser';
import UserProfile from './UserProfile';
import UserRepositories from './UserRepositories';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SearchUser />} />
          <Route path="/user/:username" element={<UserProfile />} />
          <Route path="/repos/:username" element={<UserRepositories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
