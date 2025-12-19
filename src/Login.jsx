import React, { useState } from 'react';

function Login({ onLogin }) {
  const [loginType, setLoginType] = useState('user');
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple authentication (in real app, this would be API call)
    if (loginType === 'admin' && credentials.username === 'admin' && credentials.password === 'admin123') {
      onLogin('admin');
    } else if (loginType === 'user' && credentials.username === 'user' && credentials.password === 'user123') {
      onLogin('user');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Next-Gen Tech Essentials</h2>
        
        <div className="flex mb-6">
          <button
            className={`flex-1 py-2 px-4 rounded-l-lg font-semibold ${
              loginType === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setLoginType('user')}
          >
            User Login
          </button>
          <button
            className={`flex-1 py-2 px-4 rounded-r-lg font-semibold ${
              loginType === 'admin' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setLoginType('admin')}
          >
            Admin Login
          </button>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-3 rounded-lg font-semibold text-white ${
              loginType === 'admin' ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
            } transition duration-300`}
          >
            Login as {loginType === 'admin' ? 'Admin' : 'User'}
          </button>
        </form>

        <div className="mt-4 text-sm text-gray-600 text-center">
          <p>Demo Credentials:</p>
          <p>User: user / user123</p>
          <p>Admin: admin / admin123</p>
        </div>
      </div>
    </div>
  );
}

export default Login;