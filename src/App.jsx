import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar cartCount={cart.length} />
      
      <main>
        <Banner />
        <Stats />
      </main>
    </div>
  );
}

export default App;