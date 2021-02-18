import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="flex h-96 justify-center items-center text-2xl font-medium">
        I am working on something really amazing. Look out
        <a href="https://dev.to/ilizette">
          <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Elizabeth's DEV Community Profile" height="30" width="30" />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;