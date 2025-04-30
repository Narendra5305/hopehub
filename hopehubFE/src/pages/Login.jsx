import { useState , useContext } from 'react';
import { useLoginMutation } from '../services/api';

import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


import "./pages/login.css" ;


const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [login, { isLoading }] = useLoginMutation();
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(form).unwrap();
      console.log(res.status)

      if (res) {
        navigate('/dashboard');
      } else {
        alert('Invalid credentials');
      }

    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          className="login-input"
        />
        <button type="submit" className="login-button">
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        <p className="signup-text">
          Don’t have an account?{' '}
          <Link to="/register" className="signup-link">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
