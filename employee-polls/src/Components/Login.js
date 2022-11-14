import React from 'react';
import MenuBar from './MenuBar';

const Login = () => {
    return (
    <div className="login-wrapper">
        <h1>Log In</h1>
      <form>
        <label>
            <p>User</p>
            <input type="text" />
        </label>
        <label>
            <p>Password</p>
            <input type="text" />
        </label>
        <div>
            <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    );
  }
  
  export default Login;