import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../src/App.jsx';

const Signup = () => {
  const [role, setRole] = useState('vendor');
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, role }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || 'Signup failed');
      localStorage.setItem('user', JSON.stringify(data.user));
      setAuth({ user: data.user });
      navigate(role === 'vendor' ? '/vendor' : '/supplier');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '5vh auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Sign Up</h2>
      <div>
        <button onClick={() => setRole('vendor')} style={{ background: role === 'vendor' ? '#333' : '#eee', color: role === 'vendor' ? '#fff' : '#000', marginRight: 10 }}>Vendor</button>
        <button onClick={() => setRole('supplier')} style={{ background: role === 'supplier' ? '#333' : '#eee', color: role === 'supplier' ? '#fff' : '#000' }}>Supplier</button>
      </div>
      <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required style={{ width: '100%', marginBottom: 10 }} />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required style={{ width: '100%', marginBottom: 10 }} />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required style={{ width: '100%', marginBottom: 10 }} />
        <button type="submit" style={{ width: '100%' }}>Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}</button>
        {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
      </form>
    </div>
  );
};

export default Signup;
