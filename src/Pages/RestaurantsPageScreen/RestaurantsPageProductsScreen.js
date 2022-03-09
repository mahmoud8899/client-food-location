import { Container, Row } from 'react-bootstrap'
import React, { useContext, useEffect, useState } from 'react'
import './style.css'
import RestaurantsYourOrderCart from './RestaurantsYourOrderCart'
import RestaurantsNavBarCart from './RestaurantsNavBarCart'
import RestaurangetsDescription from './RestaurangetsDescription'
import PageItemsScreen from './PageScreen/PageItemsScreen'
import PageNavBarScreen from './PageScreen/PageNavBarScreen'
import PagePhotoResta from './PageScreen/PagePhotoResta'
import { ScrollDrow } from '../../Components/SocketScreen/ScrollDrown'
import { getCategoryAction } from '../../redux/Action/Category_Action'
import { useDispatch, useSelector } from 'react-redux'
import CartScreen from '../../Components/Update/CartScreen/CartScreen'
import { GetCartInfoIdAction } from '../../redux/Action/CartItemAction'
import RestaurantsPagePhotoNavBar from './RestaurantsPagePhotoNavBar'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import { FilterCartDetials } from '../../Components/Update/UseContext/FilterRestarangeProduct'
import LoadingErrorHandle from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
export default function RestaurantsPageProductsScreen(props) {

    const { match } = props
    //  const  itemproduct =   match.params.id
    //  const xp = itemproduct.join(' ')
    // console.log()




    const dispatch = useDispatch()

    // filter cart items 
    const { setLocationNotNu } = useContext(FilterCartDetials)
    // open your order
    const [yourOrder, setYourOrder] = useState(false)
    // open description restaurang
    const [openDescription, setOpenDescription] = useState(false)

    const { addTop, hiddenNavBar, NavBarScroll } = useContext(ScrollDrow)

    const ChangeParams = match.params.id.replace("-", " ")
    // const CityName = match.url?.slice(1, 5) === 'upps' ? 'uppsala' : 'gothenburg'

    // console.log(ChangeParams,'city', CityName)
    // state location ....


    // cart info.....
    const cartInfoid = useSelector((state) => state?.cartInfoid)
    const { loading: loadingCartInfo, cartinfo, error: errorCartInfo } = cartInfoid


    const ListCategoryUX = useSelector((state) => state?.ListCategory?.category) 





    // category.....
    // cart info id
    useEffect(() => {
        if (ChangeParams) {

            return dispatch(GetCartInfoIdAction(ChangeParams))
        }

    }, [ChangeParams, dispatch])



    // // get all category.....
    // // get cart id to searching.... for searching products....
    useEffect(() => {

        if (typeof cartinfo?._id === 'string' || typeof cartinfo?._id !== 'undefined') {

            ListCategoryUX?.length === 0 && dispatch(getCategoryAction(cartinfo?._id))
            setLocationNotNu(cartinfo?._id)
          
         return   

        }

        return

        // eslint-disable-next-line
    }, [
        dispatch,
        cartinfo?._id,
        ListCategoryUX?.length,
        setLocationNotNu
     

    ])















    return <Container fluid>
        <LoadingErrorHandle loading={loadingCartInfo} error={errorCartInfo} home={cartinfo}  >

            <Title TextTitle={ChangeParams} />



            {/* nav bar time o besket */}
            <RestaurantsNavBarCart
                hiddenNavBar={hiddenNavBar}
                yourOrder={yourOrder}
                setYourOrder={setYourOrder}
                openDescription={openDescription}
                setOpenDescription={setOpenDescription}
                cartinfo={cartinfo}
            />






            <Row className='justify-content-center'>




                {/* image to restrange */}

                <PagePhotoResta cartinfo={cartinfo} />



                <RestaurantsPagePhotoNavBar
                    category={ListCategoryUX}
                    cartinfo={cartinfo}
                />





                {/* views all category och time rating   */}

                <PageNavBarScreen
                    setOpenDescription={setOpenDescription}
                    openDescription={openDescription}
                    NavBarScroll={NavBarScroll}
                    addTop={addTop}
                    category={ListCategoryUX}

                />


                {ListCategoryUX?.length >= 1 &&

                    <PageItemsScreen
                        idRes={cartinfo?._id}
                    />
                }

            </Row>


            {/* besket bottom */}
            <CartScreen
                setYourOrder={setYourOrder}
                yourOrder={yourOrder}
            />



            {/* selection your cart  */}
            <RestaurantsYourOrderCart
                setYourOrder={setYourOrder}
                yourOrder={yourOrder}
            />



            {/* datilas restrange  */}

            <RestaurangetsDescription
                openDescription={openDescription}
                setOpenDescription={setOpenDescription}
                cartinfo={cartinfo}

            />



        </LoadingErrorHandle>
    </Container>






}









