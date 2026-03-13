import React, { createContext, useState } from 'react'
export const dataContext = createContext();

function UserProvider({children}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [cartCount, setCartCount] = useState(0);
    const [showCart, setShowCart] = useState(false);
    const data = {
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
        cartCount,
        setCartCount,
        showCart,
        setShowCart

    }
    
    return (
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    )
}

export default UserProvider