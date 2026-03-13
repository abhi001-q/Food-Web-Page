import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { MdFastfood } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";
import { dataContext } from '../context/UserContext';

function Nav() {
  const { searchTerm, setSearchTerm, setShowCart } = useContext(dataContext);
  const items = useSelector(state => state.cart);
  
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-5 md:px-8">
      <div className="w-[60px] h-[60px] flex justify-center items-center rounded-md shadow-xl bg-white">
        <MdFastfood className="w-[30px] h-[30px] text-green-500" /> 
      </div>
      
      <div className="w-[45%] h-[60px] bg-white flex items-center px-5 gap-4 shadow-md md:w-[70%] rounded-lg">
        <IoMdSearch className='w-[30px] h-[30px] text-green-500' />
        <input 
          type="text" 
          placeholder="Search for food" 
          className="w-[100%] outline-none text-[16px] md:text-[20px]" 
          onChange={(e) => setSearchTerm(e.target.value)} 
          value={searchTerm}
        />
      </div>
      
      <div 
        className="w-[60px] h-[60px] flex justify-center items-center rounded-md shadow-xl relative bg-white cursor-pointer" 
        onClick={() => setShowCart(true)}
      >
        <span className='absolute top-0 right-2 text-green-500 rounded-full w-6 h-6 flex items-center justify-center text-lg font-bold'>
          {items.length}
        </span>
        <FaBasketShopping className="w-[30px] h-[30px] text-green-500" />
      </div>
    </div>
  );
}

export default Nav;