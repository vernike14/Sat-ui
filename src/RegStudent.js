import React, { useState } from 'react';
import axios from 'axios';

const RegStudent = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    country: '',
    pincode: '',
    satScore: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = { ...formData};

    try {
      await axios.post('http://localhost:1409/v1/api/satResults', dataToSend);
      alert('Registered Student successfully!');
    } catch (error) {
      console.error('Error Registering Student:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Register Student</h2>
      <form onSubmit={handleSubmit}>
        
        <label>Name:</label>
        <input type="text" name="name" required />
        <label>Address:</label>
        <input type="text" name="address" required />
        <label>City:</label>
        <input type="text" name="city" required />
        <label>Country:</label>
        <input type="text" name="country"  required />
        <label>Pincode:</label>
        <input type="number" maxLength={6} name="pincode"  required />
        <label>SAT SCORE %:</label>
        <input type="number" name="satScore" max={100}  required />

        

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegStudent;
