import React from 'react';

const Cart = ({ cartItems, onRemove, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 max-w-3xl mx-auto shadow-sm">
        <i className="fas fa-shopping-basket text-6xl text-gray-200 mb-4"></i>
        <h3 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h3>
        <p className="text-gray-500">Looks like you haven't added any tools yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 max-w-3xl mx-auto shadow-sm">
      <h2 className="text-2xl font-bold text-[#0B0F19] mb-6">Your Cart</h2>
      
      <div className="space-y-4 mb-8">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#8B5CF6] shadow-sm text-xl">
                <i className={item.icon}></i>
              </div>
              <div>
                <h4 className="font-semibold text-[#0B0F19] text-lg">{item.name}</h4>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
            </div>
            
            <button 
              onClick={() => onRemove(item.id)}
              className="text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1 rounded-md font-medium text-sm transition-colors"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-100 pt-6 mb-6 flex justify-between items-center">
        <span className="text-gray-500 font-medium text-lg">Total:</span>
        <span className="text-3xl font-extrabold text-[#0B0F19]">${total}</span>
      </div>
      
      <button 
        onClick={onCheckout}
        className="w-full bg-[#8B5CF6] hover:bg-purple-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;