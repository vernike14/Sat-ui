import React, { useState } from 'react';
import axios from 'axios';

const DeleteStudent = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.delete(`http://localhost:1409/v1/api/satResults/${name}`);
      alert('Record deleted successfully!');
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  return (
    <div>
      <h2>Delete Record</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <button type="submit">Delete Record</button>
      </form>
    </div>
  );
};

export default DeleteStudent;
