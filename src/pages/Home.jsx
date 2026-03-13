import React, { useContext } from "react";
import { useSelector } from "react-redux";
import Categories from "../category"; // Make sure this path is correct
import Nav from "../components/Nav";
import Card from "../components/Card";
import { dataContext } from "../context/UserContext";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import CartCard from "../components/cartCard";
import { ToastContainer, toast } from "react-toastify";

function Home() {
  const {
    selectedCategory,
    setSelectedCategory,
    showCart,
    setShowCart,
    searchTerm,
  } = useContext(dataContext);
  const items = useSelector((state) => state.cart);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const subtotal = Math.floor(
    items.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^\d.]/g, "")) || 0;
      const qty = parseInt(item.qty) || 0;
      return total + price * qty;
    }, 0)
  );

  const deliveryFee = Math.floor(5);
  const taxes = Math.floor(subtotal * 0.05); // 5% tax
  const total = Math.floor(subtotal + deliveryFee + taxes);

  return (
    <div className="w-full min-h-screen bg-slate-200">
      <Nav />

      {/* Categories Section - Hidden during search */}
      {!searchTerm && (
        <div className="py-12 px-4">
          <div className="flex flex-wrap justify-center items-center gap-5 mb-12">
            {Categories.map((item) => {
              const isSelected = selectedCategory === item.name;
              return (
                <div
                  className={`w-[140px] h-[150px] flex flex-col items-center justify-center gap-4 p-4 rounded-xl shadow-md transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-105 ${
                    isSelected
                      ? "bg-green-500 text-white shadow-lg scale-105"
                      : "bg-white text-gray-600 hover:bg-green-50 hover:shadow-lg"
                  }`}
                  key={item.id}
                  onClick={() => handleCategoryClick(item.name)}
                >
                  <div className={`transition-colors duration-300`}>
                    {React.cloneElement(item.icon, {
                      className: `w-16 h-16 ${
                        isSelected ? "text-white" : "text-green-500"
                      }`,
                    })}
                  </div>
                  <span className="text-lg font-semibold text-center">
                    {item.name}
                  </span>
                  {isSelected && (
                    <div className="w-full h-1 bg-white rounded-full mt-2"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Food Cards Section */}
      <div className="pb-12">
        <Card />
      </div>

      {/* Cart Sidebar */}
      <div
        className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 p-6 bg-green-100 shadow-xl flex flex-col transition-all duration-500 items-center overflow-auto ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="w-[100%] flex justify-between items-center">
          <span className="text-green-400 text-[18px] font-semibold">
            Order items
          </span>
          <MdOutlineCloseFullscreen
            className="w-[30px] h-[30px] text-green-400 font-semibold text-[18px] cursor-pointer hover:text-gray-600"
            onClick={() => setShowCart(false)}
          />
        </header>

        {items.length > 0 ? (
          <>
            <div className="w-full mt-8 flex flex-col gap-8">
              {items.map((item) => (
                <CartCard
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  qty={item.qty}
                />
              ))}
            </div>

            <div className="w-full border-t-2 border-gray-400 mt-7 flex flex-col gap-2 p-8 border-b-2">
              <div className="w-full flex justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">
                  SubTotal
                </span>
                <span className="text-green-400 font-semibold text-lg">
                  ₹{subtotal.toFixed()}
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">
                  Delivery Fee
                </span>
                <span className="text-green-400 font-semibold text-lg">
                  ₹{deliveryFee.toFixed()}
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">Tax</span>
                <span className="text-green-400 font-semibold text-lg">
                  ₹{taxes.toFixed()}
                </span>
              </div>
            </div>

            <div className="w-full flex justify-between items-center p-9">
              <span className="text-2xl text-gray-600 font-semibold">
                Total
              </span>
              <span className="text-green-400 font-semibold text-lg">
                ₹{total.toFixed()}
              </span>
            </div>

            <button className="w-[80%] p-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors flex justify-center items-center">
              <span
                className="font-semibold text-lg"
                onClick={() => {
                  toast.success("Order placed successfully!");
                }}
              >
                Place Order
              </span>
            </button>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-2xl text-green-400 font-semibold">
              Your cart is empty
            </p>
          </div>
        )}
      </div>
      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Order?</h3>
          <p className="text-gray-300 mb-6">
            Fast delivery • Fresh ingredients • Great taste
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Order Now
            </button>
            <button className="border border-white hover:bg-white hover:text-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Menu
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
