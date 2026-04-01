import React from 'react';

const ProductCard = ({ product, onAddToCart, inCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 p-6 flex flex-col h-full relative group">
      
      {/* Dynamic Tag */}
      <div className="absolute -top-3 right-4">
        <span className={`text-xs font-bold px-3 py-1 rounded-full shadow-sm 
          ${product.tagType === 'popular' ? 'bg-purple-100 text-[#8B5CF6]' : 
            product.tagType === 'new' ? 'bg-green-100 text-green-700' : 
            'bg-orange-100 text-orange-700'}`}>
          {product.tag}
        </span>
      </div>
      
      {/* Icon */}
      <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-[#8B5CF6] text-2xl mb-5 group-hover:bg-[#8B5CF6] group-hover:text-white transition-colors">
        <img 
    src={product.icon} 
    alt={product.name} 
    className="w-8 h-8 object-contain" 
  />
      </div>
      
      <h3 className="text-xl font-bold text-[#0B0F19] mb-2">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-6 `grow`">{product.description}</p>
      
      {/* Price */}
      <div className="flex items-end gap-1 mb-6">
        <span className="text-4xl font-extrabold text-[#0B0F19]">${product.price}</span>
        <span className="text-gray-500 text-sm mb-1">/{product.period}</span>
      </div>
      
      {/* Features */}
      <ul className="space-y-3 mb-8 text-sm text-gray-600">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <i className="fas fa-check text-green-500"></i> {feature}
          </li>
        ))}
      </ul>
      
      {/* Buy Button */}
      <button 
        onClick={() => onAddToCart(product)}
        disabled={inCart}
        className={`w-full py-3 rounded-xl font-semibold transition-all mt-auto
          ${inCart 
            ? 'bg-gray-100 text-gray-500 cursor-not-allowed border border-gray-200' 
            : 'bg-[#8B5CF6] hover:bg-purple-700 text-white shadow-md'}`}
      >
        {inCart ? 'Added to Cart' : 'Buy Now'}
      </button>

    </div>
  );
};

export default ProductCard;