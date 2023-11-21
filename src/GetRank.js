import React, { useState } from 'react';
import axios from 'axios';

const GetRank = () => {
  const [name, setName] = useState('');
  const [rank, setRank] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:1409/v1/api/satResults/rank/${name}`);
      setRank(response.data.rank);
    } catch (error) {
      console.error('Error getting rank:', error);
    }
  };

  return (
    <div>
      <h2>Get Rank</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <button type="submit">Get Rank</button>
      </form>
      {rank !== null && <p>Rank: {rank}</p>}
    </div>
  );
};

export default GetRank;
