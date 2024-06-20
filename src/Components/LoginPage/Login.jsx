import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function LoginPage({ onLogin }) {
  const [type, setType] = useState('signIn');
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    const { username, password } = state;

    setState({
      username: username,
      password: password,
    });

    if (typeof onLogin === 'function') {
      onLogin(state);
      navigate('./home');
    } else {
      console.error('onLogin is not a function');
    }
  };

  const handleOnClick = (text) => {
    setType(text);
  };

  const containerClass = `container ${
    type === 'signUp' ? 'right-panel-active' : ''
  }`;

  return (
    <div className="login_App">
      <div className={containerClass} id="container">
        <div
          className={`form-container ${
            type === 'signUp' ? 'sign-up-container' : 'sign-in-container'
          }`}
        >
          <form onSubmit={handleOnSubmit}>
            <h1 className="login_h1">
              {type === 'signUp' ? 'Create Account' : 'Sign in'}
            </h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            {type === 'signUp' ? (
              <span className="login_span">
                Use your username for registration
              </span>
            ) : (
              ''
            )}

            <input
              type="text"
              placeholder="User Name"
              name="username"
              value={state.username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
            />
            {type === 'signUp' ? (
              <input
                type="password"
                name="password"
                placeholder="Confirm Password"
                value={state.password}
                onChange={handleChange}
              />
            ) : (
              ''
            )}

            {type === 'signUp' ? '' : <a href="#">Forgot your password?</a>}
            <br />
            <button className="login_button" type="submit">
              {type === 'signUp' ? 'Sign Up' : 'Sign In'}
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="login_h1">Welcome!</h1>
              <p className="login_para">
                To keep connected with us please SignUp with your personal info
              </p>
              <button
                className="ghost login_button"
                id="signIn"
                onClick={() => handleOnClick('signIn')}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="login_h1">Hello!</h1>
              <p className="login_para">
                Enter your personal details and start your journey with us
              </p>
              <button
                className="ghost login_button"
                id="signUp"
                onClick={() => handleOnClick('signUp')}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
