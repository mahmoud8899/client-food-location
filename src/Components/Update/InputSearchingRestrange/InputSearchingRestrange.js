import { useContext } from 'react'
import { SearchingContext } from '../UseContext/SearchingResult'
import { FormControl } from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'
import Styles from '../StylesComponents/style'
import { HiOutlineX } from 'react-icons/hi'


export default function InputSearchingRestrange(props) {




    // singe Page Searching with products......
    const { searching, setSearching } = useContext(SearchingContext)



    // tesing... console.log(searching)

    return <div className='searching-rest'>

        <div className='Searching-Products'>
            <FormControl
                className='with-input'
                placeholder='Söker efter Produkter...'
                onChange={(e) => setSearching(e.target.value?.toLowerCase())}
                value={searching}
                style={Styles.NavBarSearchingColorInput}
            />

            <BiSearch
                style={Styles.searchingcolor}
                className='Searching-input'
            />
            {searching?.length >= 1 && <HiOutlineX
                className='close-pp-pp-image ADD-REMOVE'
                onClick={() => setSearching('')}
            />}

        </div>
    </div>

}

   // const dispatch = useDispatch()
   // // cart info.....
    // const cartInfoid = useSelector((state) => state?.cartInfoid)
    // const { loading, cartinfo } = cartInfoid
    // // searching product
    // const ProductsSearching = useSelector((state) => state?.ProductsSearching)
    // const { searchingHome } = ProductsSearching
    // useEffect(() => {
    //     setProducts(products?.concat(searchingHome))
    //     return () => {
    //         setProducts([])
    //     }
    //     // eslint-disable-next-line
    // }, [searchingHome, setProducts])
    // useEffect(() => {
    //     setProducts([])
    //     searching && HandleSearching()
    //     // eslint-disable-next-line
    // }, [searching, setProducts])
    // const HandleSearching = () => {
    //     if (!searching?.startsWith(' ') || !searching.endsWith(' ')) {
    //         return dispatch(SearchingProductsAction(cartinfo?._id, searching, true))
    //     }
    // }
