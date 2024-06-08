// src/UserRepositories.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function UserRepositories() {
  const { username } = useParams();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        setRepos(response.data);
      } catch (err) {
        setError('Repositories not found');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="repository-list">
      <h1>Repositories of {username}</h1>
      <ul>
        {repos.map((repo, index) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {index + 1}. {repo.name}
            </a>
          </li>
        ))}
      </ul>
      <Link className="back-button" to={`/user/${username}`}>Back to Profile</Link>
    </div>
  );
}

export default UserRepositories;
