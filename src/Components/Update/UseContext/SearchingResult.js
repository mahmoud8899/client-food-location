import React, { createContext, useState } from 'react'



export const SearchingContext = createContext()

export default function SearchingResult({ children }) {


    const [products, setProducts] = useState([]);
    const [searching, setSearching] = useState('')


    return <SearchingContext.Provider value={{ products, setProducts,searching, setSearching }}>
        {children}
    </SearchingContext.Provider>

}