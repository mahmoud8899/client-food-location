import { Container, Row } from 'react-bootstrap'
import React, { useContext, useEffect, useState } from 'react'
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
import { ErrorServer } from '../../Assistant/TextError'
// import * as ActionTypes from '../../redux/Action/Types'
// ActionTypes.ADD_CARTINFO_ID_SUCCESS
import './style.css'
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

    // nav bar scroll from context....
    const { addTop, hiddenNavBar, NavBarScroll } = useContext(ScrollDrow)

    // filter linke after thet send requrest to server 
    const ChangeParams = match.params.id.replace("-", " ")
    // const CityName = match.url?.slice(1, 5) === 'upps' ? 'uppsala' : 'gothenburg'


    // send requrest to category och run
    const [categoryRun, setcategoryRun] = useState(false)

    //get cart info 
    // event error and loading.....
    const cartInfoid = useSelector((state) => state?.cartInfoid)
    const { loading: loadingCartInfo, cartinfo, error: errorCartInfo } = cartInfoid



    // get all category to restrange.
    const CategoryPublic = useSelector((state) => state?.PagePublicCategory?.category[cartinfo?._id]) || []





    // category.....
    // cart info id   testing loading and error okey......
    useEffect(() => {
        if (ChangeParams) {
            dispatch(GetCartInfoIdAction(ChangeParams))
            setcategoryRun(true)
            return
        }
        // eslint-disable-next-line
    }, [ChangeParams, dispatch])









    // // get all category.....
    // // get cart id to searching.... for searching products....
    useEffect(() => {

        if (categoryRun)
            if (typeof cartinfo?._id === 'string' || typeof cartinfo?._id !== 'undefined') {
                CategoryPublic?.length === 0 && dispatch(getCategoryAction(cartinfo?._id))
                return setLocationNotNu(cartinfo?._id)

            }

        // eslint-disable-next-line
    }, [cartinfo, dispatch, categoryRun, setLocationNotNu])




    return <Container fluid>
        <LoadingErrorHandle
            loading={loadingCartInfo}
            error={errorCartInfo}
            TextNotItems={ErrorServer}
        >
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
                    category={CategoryPublic}
                    cartinfo={cartinfo}
                />

                {/* views all category och time rating   */}

                <PageNavBarScreen
                    setOpenDescription={setOpenDescription}
                    openDescription={openDescription}
                    NavBarScroll={NavBarScroll}
                    addTop={addTop}
                    category={CategoryPublic}

                />
                {CategoryPublic?.length >= 1 &&

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











    // if (typeof cartinfo?._id === 'string' || typeof cartinfo?._id !== 'undefined') {
    //     //  console.log('run',cartinfo?._id)
    //     CategoryPublic?.length === 0 &&  dispatch(getCategoryAction(cartinfo?._id))
    //     return setLocationNotNu(cartinfo?._id)
    // }

    // useEffect(() => {

    //     if (typeof cartinfo?._id === 'string' || typeof cartinfo?._id !== 'undefined') {

    //         console.log('helllo', cartinfo?._id)



    //         return

    //     }

    //     // eslint-disable-next-line
    // }, [
    //     dispatch,
    //     cartinfo,

    //     setLocationNotNu
    // ])

