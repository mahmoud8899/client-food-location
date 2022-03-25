
import { createContext, useState } from 'react'


export const SearchingHomeDatilas = createContext()


export default function SearchingHome({ children }) {

    const [inputSearching, setInputSearching] = useState('')




    return <SearchingHomeDatilas.Provider value={{ inputSearching, setInputSearching }}>
        {children}
    </SearchingHomeDatilas.Provider>
}