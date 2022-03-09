import { useDispatch, useSelector } from 'react-redux'
import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen'
import { productpaginationAction } from '../../../redux/Action/Product_Action'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useEffect, useState, useContext } from 'react'
import { SearchingContext } from '../../../Components/Update/UseContext/SearchingResult'
import RestaurantsOneProduct from '../RestaurantsOneProduct'
import RestaurantProducts from '../../../Components/Update/RestaurantProducts/RestaurantProducts'
import { SearchingProductsAction } from '../../../redux/Action/SearchingProduct'
import Styles from '../../../Components/Update/StylesComponents/style'



export default function PageItemsScreen(props) {
    const { idRes } = props

    const [openCartProduct, setOpenCartProduct] = useState({ value: false, id: '' })
    const dispatch = useDispatch()
    const theProducts = useSelector((state) => state?.PaginationProducts)

    const { categoryProductsNextPagesxp, products } = theProducts



    // searching product
    // const { products, searching } = useContext(SearchingContext)
    // const ProductsSearching = useSelector((state) => state?.ProductsSearching)
    // const { page } = ProductsSearching





    useEffect(() => {


        // console.log(typeof  idRes)

        if (idRes) {
            return products?.length === 0 && dispatch(productpaginationAction(idRes))
        }

    }, [idRes, dispatch, products?.length])












    const HandleOpenProductid = (e, id) => {
        e.preventDefault()

        // console.log(id)

        return setOpenCartProduct({ value: true, id: id })

    }



    // fetching products....
    const fetchData = () => {

        // console.log(typeof TestingNumber)


        if (idRes) {
            return dispatch(productpaginationAction(idRes))
        }




    }




    // // fetching searching....
    // const FetchSearching = () => {

    //     // return console.log('hello more...')
    //     dispatch(SearchingProductsAction(idRes, searching))
    // }


    

    // console.log(categoryProductsNextPagesxp)



    return <div className='Margin-top-lit'>


        {idRes ?



            <InfiniteScroll
                style={Styles.hidden}
                dataLength={products.length}
                next={fetchData}
                hasMore={categoryProductsNextPagesxp !== null ? 'false' : 'true'}
                loader={categoryProductsNextPagesxp !== null ? <LoadingScreen /> : null}
                endMessage={<p ><b>Yay! You have seen it all</b> </p>}
            >

                <RestaurantProducts
                    matProducts={products}
                    HandleOpenProductid={HandleOpenProductid}
                />


            </InfiniteScroll>

            : null
        }




        <RestaurantsOneProduct
            openCartProduct={openCartProduct}
            setOpenCartProduct={setOpenCartProduct}
        />




    </div>

}




// style={Styles.hidden}
// dataLength={products?.length >= 1 ? products?.length : matProducts.length}
// next={products?.length >= 1 ? FetchSearching : fetchData}
// hasMore={products?.length >= 1 ? page !== null ? 'false' : 'true' :TestingNumber !== null ? 'false' : 'true' }
// loader={products?.length >= 1 ? page !== null ? <LoadingScreen /> : null : TestingNumber !== null ? <LoadingScreen /> : null}
// endMessage={<p ><b>Yay! You have seen it all</b> </p>}
// >

// <RestaurantProducts
//     matProducts={products?.length >= 1 ? products : matProducts}
//     HandleOpenProductid={HandleOpenProductid}
// />

