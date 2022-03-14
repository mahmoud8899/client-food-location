import { useDispatch, useSelector } from 'react-redux'
import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen'
import { PorudtsActionPaganationPublic } from '../../../redux/Action/Product_Action'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useEffect, useState } from 'react'
import RestaurantsOneProduct from '../RestaurantsOneProduct'
import RestaurantProducts from '../../../Components/Update/RestaurantProducts/RestaurantProducts'
import Styles from '../../../Components/Update/StylesComponents/style'



export default function PageItemsScreen(props) {
    const { idRes } = props



    // open one product....
    const [openCartProduct, setOpenCartProduct] = useState({ value: false, id: '' })
    const dispatch = useDispatch()


    // //pagination products...
    const matProducts = useSelector((state) => state?.PagePublicProducts?.allProducts[idRes]) || []
    const NumberPages = useSelector((state) => state?.PagePublicProducts?.productNextNumber[idRes]) || null





    // get all products .....
    useEffect(() => {
        if (idRes) {
            return matProducts?.length === 0 && dispatch(PorudtsActionPaganationPublic(idRes))
        }

    }, [idRes, dispatch, NumberPages, matProducts?.length])














    // open sigel page one product
    const HandleOpenProductid = (e, id) => {
        e.preventDefault()
        return setOpenCartProduct({ value: true, id: id })

    }



    // fetching products....
    const fetchData = () => {
        if (NumberPages > Number(1)) {
            if (idRes) {
                return dispatch(PorudtsActionPaganationPublic(idRes))
            }
        }
    }





    return <div className='Margin-top-lit'>


        {idRes ?



            <InfiniteScroll
                style={Styles.hidden}
                dataLength={matProducts?.length}
                next={fetchData}
                hasMore={NumberPages !== null ? 'false' : 'true'}
                loader={NumberPages !== null ? <LoadingScreen /> : null}
                endMessage={<p ><b>Yay! You have seen it all</b> </p>}
            >

                <RestaurantProducts
                    matProducts={matProducts}
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



        // console.log(typeof  idRes)
            // const theProducts = useSelector((state) => state?.PaginationProducts)
    // const { categoryProductsNextPagesxp, products } = theProducts
    // searching product
    // const { products, searching } = useContext(SearchingContext)
    // const ProductsSearching = useSelector((state) => state?.ProductsSearching)
    // const { page } = ProductsSearching
 // // fetching searching....
    // const FetchSearching = () => {

    //     // return console.log('hello more...')
    //     dispatch(SearchingProductsAction(idRes, searching))
    // }
    // console.log(categoryProductsNextPagesxp)
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

