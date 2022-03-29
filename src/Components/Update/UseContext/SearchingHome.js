
import { createContext, useState, useEffect } from 'react'
import { SearchingProductsAction } from '../../../redux/Action/SearchingProduct'
import { useDispatch, useSelector } from 'react-redux'





export const SearchingHomeDatilas = createContext()


export default function SearchingHome({ children }) {



    const dispatch = useDispatch()
    

    //filter params id city....
    const LastLength = window.location.pathname.length
    const city = window.location.pathname.slice(1, LastLength - 1)

    
    // input searching in server
    const [inputSearching, setInputSearching] = useState('')


    // console.log(city) 

    // searching product
    const ProductsSearching = useSelector((state) => state?.ProductsSearching)
    const { searchingHome } = ProductsSearching


    // input concat all result 
    const [products, setProducts] = useState([])



    // concat result to product
    useEffect(() => {
        setProducts(products?.concat(searchingHome))
        return () => {
            setProducts([])
        }
        // eslint-disable-next-line
    }, [searchingHome, setProducts])

    // remove result old add new result 
    useEffect(() => {
        setProducts([])
        inputSearching.length > Number(1) && HandleSearching()
        // eslint-disable-next-line
    }, [inputSearching, setProducts])


// const city = 'uppsala'

    // send first result to server 
    const HandleSearching = () => {
        if (!inputSearching?.startsWith(' ') || !inputSearching.endsWith(' ')) {
            return dispatch(SearchingProductsAction(city, inputSearching, true))
        }
    }




    return <SearchingHomeDatilas.Provider value={{ inputSearching, setInputSearching, products ,city }}>
        {children}
    </SearchingHomeDatilas.Provider>
}