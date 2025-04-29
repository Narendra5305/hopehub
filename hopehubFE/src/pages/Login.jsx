import { useState , useContext } from 'react';
import { useLoginMutation } from '../redux/api/apiSlice';
import {AuthContext} from '../context/authContext';

import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [login, { isLoading }] = useLoginMutation();
  const { loginUser } =useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(form).unwrap();
      loginContext(res.token);
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="input" />
      <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required className="input" />
      <button type="submit" className="btn">{isLoading ? 'Logging in...' : 'Login'}</button>
    </form>
  );
}

export default Login;
