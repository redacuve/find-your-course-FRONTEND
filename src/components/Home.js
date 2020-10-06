import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Find your Course Anywhere</h2>
      <p>The Learning platform</p>
      <div>
        Start free today
        Create your free account
        <Link to="/signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Sign in</Link>
        or
        <Link to="/login" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Login</Link>
      </div>
    </div>
  );
}

export default Home;
