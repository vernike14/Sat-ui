import React, { useState } from 'react';
import axios from 'axios';

const UpdateScore = () => {
  const [name, setName] = useState('');
  const [newScore, setNewScore] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:1409/v1/api/satResults/${name}/${newScore}`);
      alert('Score updated successfully!');
    } catch (error) {
      console.error('Error updating score:', error);
    }
  };

  return (
    <div>
      <h2>Update Score</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>New Score:</label>
        <input type="number" value={newScore} onChange={(e) => setNewScore(e.target.value)} required />

        <button type="submit">Update Score</button>
      </form>
    </div>
  );
};

export default UpdateScore;
