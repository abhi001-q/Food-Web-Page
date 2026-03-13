import { GiCakeSlice } from "react-icons/gi";
import { GiHotMeal } from "react-icons/gi";
import { BiRestaurant } from "react-icons/bi";
import { BiDrink } from "react-icons/bi";
import { GiNoodles } from "react-icons/gi";
import { TbSalad } from "react-icons/tb";
import { PiForkKnifeFill } from "react-icons/pi";
import { GiTacos } from "react-icons/gi";
import React from "react";

const Categories = [
    {
        id: 1,
        name: "All",
        icon: <BiRestaurant className='w-[60px] h-[60px] text-green-500' />,
    },
  {
    id: 2,
    name: "Fast Food",
    icon: <GiTacos className='w-[60px] h-[60px] text-green-500' />
  },
  {
    id: 3,
    name: "Main Course",
    icon: <GiHotMeal className='w-[60px] h-[60px] text-green-500' />
  },
  {
    id: 4,
    name: "Dessert",
    icon: <GiCakeSlice className='w-[60px] h-[60px] text-green-500' />
  },
  {
    id: 5,
    name: "Drink",
    icon: <BiDrink className='w-[60px] h-[60px] text-green-500' />
  },
  {
    id: 6,
    name: "Snacks",
    icon: <GiNoodles className='w-[60px] h-[60px] text-green-500' />
  },
  {
    id: 7,
    name: "Salads",
    icon: <TbSalad className='w-[60px] h-[60px] text-green-500' />
  }
    ];


    export default Categories