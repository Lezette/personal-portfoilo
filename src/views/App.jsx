import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="flex h-96 justify-center items-center text-2xl font-medium">
        I am working on something really amazing. Look out
      </div>
      <Footer />
    </div>
  );
}

export default App;