// components/RegisterForm.jsx
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../services/api'; // RTK Query

const RegisterForm = () => {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'general',
  });
  const [register, { isLoading, isSuccess, isError, error }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await register(formData).unwrap(); // Call the mutation to register
      if (response.token) {
        loginUser(response.token); // Store the token in AuthContext and localStorage
        navigate('/dashboard'); // Redirect to a dashboard or another page
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Register</h2>
      
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
      /><br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      /><br />

      <input
        type="password"
        name="password"
        placeholder="Password (min 6 chars)"
        value={formData.password}
        onChange={handleChange}
        minLength={6}
        required
      /><br />

      <select name="role" value={formData.role} onChange={handleChange}>
        <option value="general">General</option>
        <option value="volunteer">Volunteer</option>
        <option value="admin">Admin</option>
      </select><br />

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Registering...' : 'Register'}
      </button>

      {isError && <p style={{ color: 'red' }}>{error?.data?.message || 'Registration failed'}</p>}
      {isSuccess && <p style={{ color: 'green' }}>Registered successfully!</p>}
    </form>
  );
};

export default RegisterForm;
