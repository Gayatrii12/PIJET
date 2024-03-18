import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [country, setCountry] = useState('');
  const [organization, setOrganization] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const API_REGISTER = 'https://pijet-backend.onrender.com/user/signup';
  const API_LOGIN = 'https://pijet-backend.onrender.com/user/login';


  //API for login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_LOGIN, {
        email,
        password
      });

      const data = response.data.data.token;
      console.log(data);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  //API for register
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_REGISTER, {
        email,
        password,
        organization,
        country
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleForgotPassword = () => {
    // Redirect or display forgot password modal
    console.log('Forgot password clicked');
  };

  return (
    <div className="py-10 flex items-center justify-center bg-blue-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-pijet-blue">
          {isLogin ? 'Author sign in' : 'Register as an author'}
        </h2>
        <form
          onSubmit={isLogin ? handleLoginSubmit : handleRegisterSubmit}
          className="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <input type="hidden" name="remember" value="true" />
          <div>
            <label htmlFor="email" className="block px-1 text-sm text-left font-medium text-gray-700">
              Email address:
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pijet-blue focus:border-pijet-blue sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block px-1 text-left text-sm font-medium text-gray-700">
              Password:
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                pattern="^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pijet-blue focus:border-pijet-blue sm:text-sm"
              />
            </div>
          </div>
          {!isLogin &&
            <div>
              <label htmlFor="repassword" className="block px-1 text-left text-sm font-medium text-gray-700">
                Re-enter Password:
              </label>
              <div className="mt-1">
                <input
                  id="repassword"
                  name="repassword"
                  type="password"
                  pattern="^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$"
                  required
                  value={repassword}
                  onChange={(e) => setRepassword(e.target.value)} //compare with password and highlight error
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pijet-blue focus:border-pijet-blue sm:text-sm"
                />
              </div>
            </div>
          }
          {!isLogin &&
            <div>
              <label htmlFor="org" className="block px-1 text-left text-sm font-medium text-gray-700">
                Organization:
              </label>
              <div className="mt-1">
                <input
                  id="org"
                  name="org"
                  type="text"
                  autoComplete=""
                  required
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pijet-blue focus:border-pijet-blue sm:text-sm"
                />
              </div>
            </div>
          }
          {!isLogin &&
            <div>
              <label htmlFor="country" className="block px-1 text-left text-sm font-medium text-gray-700">
                Country:
              </label>
              <div className="mt-1">
                <input
                  id="country"
                  name="country"
                  type="text"
                  autoComplete=""
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pijet-blue focus:border-pijet-blue sm:text-sm"
                />
              </div>
            </div>
          }
          {isLogin && <div className="flex items-center justify-between">
            <div className="text-sm">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot your password?
              </button>
            </div>
          </div>}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pijet-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isLogin ? 'Sign in' : 'Register'}
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            {isLogin ? 'Not registered? Create an account' : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
