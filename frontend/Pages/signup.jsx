import React from 'react';
import '../Components/sign-up.css';

function SignUp() {
  return (
    <div className="container-sign-up">
      <h2 className="sign-up-title">Sign Up</h2>
      <form>
        <div className="form-group-sign-up">
          <label className="label-sign-up" htmlFor="name">Name</label>
          <input className="input-sign-up" type="text" id="name" name="name" required />
        </div>
        <div className="form-group-sign-up">
          <label className="label-sign-up" htmlFor="email">Email</label>
          <input className="input-sign-up" type="email" id="email" name="email" required />
        </div>
        <div className="form-group-sign-up">
          <label className="label-sign-up" htmlFor="password">Password</label>
          <input className="input-sign-up" type="password" id="password" name="password" required />
        </div>
        <div className="form-group-sign-up">
          <label className="label-sign-up" htmlFor="confirmPassword">Confirm Password</label>
          <input className="input-sign-up" type="password" id="confirmPassword" name="confirmPassword" required />
        </div>
        <button className="btn-sign-up" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
