import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import productsData from './data/products.json';
function App() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('products');
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  const handleRemove = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    toast.error("Item removed from cart!", {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  const handleCheckout = () => {
    setCart([]); 
    setActiveTab('products'); 
    toast.info("Checkout successful! Thank you.", {
      position: "bottom-center",
      autoClose: 3000,
    });
  };
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar cartCount={cart.length} />
      
      <main>
        <Banner />
        <Stats />
        <div className="container mx-auto px-4 mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B0F19] mb-4">Premium Digital Tools</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-8">
              Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
            </p>
            
            <div className="inline-flex bg-white border border-gray-200 rounded-full p-1 shadow-sm">
              <button 
                onClick={() => setActiveTab('products')}
                className={`px-8 py-2.5 rounded-full font-semibold text-sm transition-all ${activeTab === 'products' ? 'bg-[#8B5CF6] text-white shadow-md' : 'text-gray-500 hover:text-gray-800'}`}
              >
                Products
              </button>
              <button 
                onClick={() => setActiveTab('cart')}
                className={`px-8 py-2.5 rounded-full font-semibold text-sm transition-all ${activeTab === 'cart' ? 'bg-[#8B5CF6] text-white shadow-md' : 'text-gray-500 hover:text-gray-800'}`}
              >
                Cart ({cart.length})
              </button>
            </div>
          </div>

          {activeTab === 'products' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productsData.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={handleAddToCart}
                  inCart={cart.some(item => item.id === product.id)} 
                />
              ))}
            </div>
          ) : (
            <Cart 
              cartItems={cart} 
              onRemove={handleRemove} 
              onCheckout={handleCheckout} 
            />
          )}

        </div>
        <Steps />
        <Pricing />
      </main>
      <CTA />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;