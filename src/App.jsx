import React, { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  // State for our cart (starts empty)
  const [cart, setCart] = useState([]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar cartCount={cart.length} />
      
      <main>
        <div className="text-center py-20">
          <h1 className="text-3xl text-gray-500">Navbar is loaded perfectly!</h1>
        </div>
      </main>
    </div>
  );
}

export default App;