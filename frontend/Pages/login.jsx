import React, { useState } from 'react';
import '../Components/login.css';
import Header from './Navbar';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember });
    // Add login API call here
  };

  return (
<>
    <Header/>
    <div className="container-login">
      

      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group-login">
          <label className="label-login" htmlFor="email">Email</label>
          <input
            className="input-login"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group-login">
          <label className="label-login" htmlFor="password">Password</label>
          <input
            className="input-login"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-options-login">
          <label>
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember Me
          </label>
          <a href="/forgot-password" className="forgot-link-login">
            Forgot Password?
          </a>
        </div>

        <button className="btn-login" type="submit">Login</button>
      </form>

      <div className="signup-prompt-login">
        <p>Don’t have an account? <a href="/signup" className="signup-link-login">Sign Up</a></p>
      </div>
    </div>
</>    
  );
}

export default Login;
