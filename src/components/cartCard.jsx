import React from "react";
import { useDispatch } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { removeItem, incrementQty, decrementQty } from '../store/cartSlice'; // Fixed import path

function CartCard({name, id, price, image, qty}) {
  const dispatch = useDispatch();
  
  const handleIncrement = () => {
    dispatch(incrementQty(id));
  };
  
  const handleDecrement = () => {
    dispatch(decrementQty(id));
  };
  
  return (
    <div className="w-full h-[120px] p-2 shadow-lg flex justify-between items-center bg-white rounded-lg mb-4">
      <div className="w-[60%] h-full flex gap-5">
        <div className="w-[60%] h-full overflow-hidden rounded-lg">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="w-[40%] h-full flex flex-col gap-3">
          <div className="text-lg text-gray-600 font-semibold">{name}</div>
          <div className="w-[110px] h-[50px] bg-slate-400 flex rounded-lg shadow-lg overflow-hidden font-semibold border-2 border-green-400 text-xl">
            <button 
              className="w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400">
              {qty}
            </span>
            <button 
              className="w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-end gap-6'>
        <span className='text-xl text-green-400 font-semibold'>{price}</span>
        <MdDelete 
          className='w-[30px] h-[30px] text-red-400 cursor-pointer hover:text-red-600'
          onClick={() => dispatch(removeItem(id))} 
        />
      </div>
    </div>
  );
}

export default CartCard;