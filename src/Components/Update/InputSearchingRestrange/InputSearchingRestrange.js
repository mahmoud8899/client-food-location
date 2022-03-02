import { useContext, useEffect } from 'react'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import Input from '../../Input/Input'
import { useSelector, useDispatch } from 'react-redux'
import LoadingScreen from '../../LoadingScreen/LoadingScreen'
import { SearchingProductsAction } from '../../../redux/Action/SearchingProduct'
import { SearchingContext } from '../UseContext/SearchingResult'
export default function InputSearchingRestrange(props) {



    const dispatch = useDispatch()

    const { products, setProducts, searching, setSearching } = useContext(SearchingContext)



    // cart info.....
    const cartInfoid = useSelector((state) => state?.cartInfoid)
    const { loading, cartinfo } = cartInfoid

    // searching product
    const ProductsSearching = useSelector((state) => state?.ProductsSearching)
    const { searchingHome } = ProductsSearching






    useEffect(() => {
        setProducts(products?.concat(searchingHome))


        return () => {
            setProducts([])
        }
        // eslint-disable-next-line
    }, [searchingHome, setProducts])










    useEffect(() => {

        setProducts([])

        searching && HandleSearching()
        // eslint-disable-next-line
    }, [searching, setProducts])


    const HandleSearching = () => {


        if (!searching?.startsWith(' ') || !searching.endsWith(' ')) {

            return dispatch(SearchingProductsAction(cartinfo?._id, searching, true))
        }
    }






    return loading ? <LoadingScreen /> : <div className='searching-rest'>
        <Input
            placeholder='Searching'
            ImageLog={MyOderImage.search}
            className='Input-type-style'
            onChange={(e) => setSearching(e.target.value)}
            // onKeyPress={(e) => e.key === 'Enter' ? HandleSearching() : null}

            value={searching}
        />
    </div>

}