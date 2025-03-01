import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center">🛒 Cart: {cart.length} item(s)</h2>
      <h3 className="text-xl text-center text-gray-600">Total Price: ${totalPrice}</h3>

      {loading && <h1 className="text-center text-lg">Loading...</h1>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 hover:bg-gray-300 bg-white shadow-md transform transition-transform transition-all duration-500 hover:scale-105"
          >
            <h3 className="font-semibold text-lg">{product.title}</h3>
            <img className="w-40 h-auto mx-auto my-4" src={product.image} alt={product.title} />
            <p className="text-gray-600">
              <strong>Price:</strong> ${product.price}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="bg-green-500 hover:text-lg cursor-pointer text-white px-4 py-2 rounded-md mt-4 hover:bg-green-700 transition-all duration-300 "  
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 cursor-pointer hover:text-lg right-6 bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg text-lg font-bold hover:bg-orange-600 transition-transform transform hover:scale-110"
      >
        🛍️ View Cart
      </button>

     
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => setIsCartOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold text-center mb-4">Your Cart</h2>

            {cart.length === 0 ? (
              <p className="text-gray-600 text-center">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b pb-2">
                    <div>
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                      >
                        ❌
                      </button>
                    </div>
                  </div>
                ))}
                <p className="text-lg font-bold text-center mt-4">Total: ${totalPrice}</p>
                <button
                  className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                  onClick={() => alert("Proceeding to checkout...")}
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
