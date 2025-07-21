import React, { useState } from 'react';
import API from '../api';
import { Link } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', otp: '' });

  const sendOTP = async () => {
    try {
      await API.post('/auth/send-otp', { email: form.email });
      alert('OTP sent to your email!');
    } catch (err) {
      alert('Error sending OTP');
    }
  };

  const register = async () => {
    try {
      await API.post('/auth/register', form);
      alert('Registered successfully!');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button onClick={sendOTP}>Send OTP</button>
      <input placeholder="Enter OTP" onChange={e => setForm({ ...form, otp: e.target.value })} />
      <button onClick={register}>Register</button>
      <br />
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
}
