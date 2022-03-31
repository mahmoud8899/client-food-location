import { BestRestaurantAction, FatchButik, FoodTypesAction, FreeDeliveryAction, GetCartInfoHomeRestranges } from '../../redux/Action/CartItemAction'
import { ErrorServer, TextButiker, Textfree, TextCategory, LoadingSkeletonHomeCart, TextRestrantHome, TextBestHome } from '../../Assistant/TextError'
import LoadingErrorHandld from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import SearchingResultHome from '../../Components/Update/NavBarSearchingHome/SearchingResultHome'
import RestrangeItems from './RestrangeItems/RestrangeItems'
import CategoryScreen from './CategoryScreen/CategoryScreen'
import TimeContext from '../../Components/Update/UseContext/TimeContext'
import LoginDriverScreen from './LoginDriverScreen/LoginDriverScreen'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { FirstNameRest } from '../../Assistant/Selection'
import NavBarCity from '../NavBarCity/NavBarCity'
import Carousel from './Carousel/Carousel'
import { useEffect, useContext } from 'react'
import { UserLoaction } from '../LoactionPage/LoactionPage'
import { Link } from 'react-router-dom'
import './Home.css'
// import LocationUser from './LocationUser/LocationUser'
// <LocationUser  />


export default function HomeScreen(props) {

    // // whoy params id
    // const { match } = props
    // // city name
    //  const LocationPath = match.params.id
    //  console.log(LocationPath)



    

    // location User
    const { lat, long, loading: loadingLocation, } = useContext(UserLoaction)

    const dispatch = useDispatch()

    // get all restrange and stores....
    const PageHomeRestrange = useSelector((state) => state?.PageHomeRestrange)
    const { loading, error, stores, home } = PageHomeRestrange



    // get Best Restaurant
    const pageHomeNewBestRestrant = useSelector((state) => state?.pageHomeNewBestRestrant)
    const { loading: loadingnewBestRestaurant, BestRestaurant, error: errornewBestRestaurant } = pageHomeNewBestRestrant

    // category all 
    const pageHomeCategory = useSelector((state) => state?.pageHomeCategory)
    const { loading: loadingCategory, category, error: errorCategory } = pageHomeCategory

    // user info 
    const userLogin = useSelector((state) => state?.userLogin)
    const { userInfo } = userLogin



    // get all restrange
    useEffect(() => {
        if (lat !== null && long !== null) {
            return BestRestaurant?.length === Number(0) && dispatch(BestRestaurantAction({
                lat: lat,
                long: long,
                productType: "restaurant"
            }))
        }


    }, [dispatch, BestRestaurant?.length, lat, long,])




    // get all butiker
    useEffect(() => {
        if (lat !== null && long !== null) {
            stores?.length === Number(0) && dispatch(FatchButik({
                lat: lat,
                long: long,
                productType: 'butiker'

            }))

            return
        }


    }, [dispatch, lat, long, stores?.length])



    // get all restrant
    useEffect(() => {


        return lat !== null && long !== null && home?.length === Number(0) && dispatch(GetCartInfoHomeRestranges({
            lat: lat,
            long: long,
            productType: 'restaurant'
        }))




    }, [


        dispatch,
        lat,
        long,
        home?.length
    ])





    // get free delivery from restrest and stores
    const pageHomeFreeDelivery = useSelector((state) => state?.pageHomeFreeDelivery)
    const { loading: loadingFreedelivery, freedelivery, error: errorFreedelivery } = pageHomeFreeDelivery
    //  free delivery
    useEffect(() => {
        if (lat !== null && long !== null) {

            return freedelivery?.length === Number(0) && dispatch(FreeDeliveryAction({
                lat: lat,
                long: long
            }))
        }


    }, [dispatch, freedelivery?.length, lat, long])





    // category
    useEffect(() => {

        category.length === Number(0) && dispatch(FoodTypesAction())

    }, [dispatch, category.length])

    // [1]  LoadingErrorHandld this is check out error and loading if not error coming data  
    // [2]  Limit new restrange max 8 itmes. and Carousel some data
    // [3] : stores 
    // [4] : free category 
    // [5]   class name category ....>   CategoryScreen  
    // [6] driver resgstira 








    return <LoadingErrorHandld loading={loadingLocation} >
        <TimeContext>
            <Container fluid>
                <Title TextTitle={FirstNameRest} />

                <Row className='justify-content-center'>

                    <Col xs={12} sm={12} md={6} lg={6} className='postion-abs'  >
                        <SearchingResultHome />
                    </Col>
                </Row>






                <div className='margin-top-like'>
                    <NavBarCity ClassNameHOMEactive />
                </div>


                <Row className='justify-content-center'>




                    <Col xs={12} sm={12} md={11} lg={11}>

                        <LoadingErrorHandld loading={loadingnewBestRestaurant} error={errornewBestRestaurant} TextNotItems={ErrorServer} type={LoadingSkeletonHomeCart}  >
                            <Carousel home={BestRestaurant} Title={TextBestHome} />
                        </LoadingErrorHandld>



                        <LoadingErrorHandld loading={loading} error={error} TextNotItems={ErrorServer} type={LoadingSkeletonHomeCart}  >


                            <RestrangeItems home={home} Title={TextRestrantHome}
                                // nextNumber={nextNumber}
                                TheRedirect={
                                    <Link to={{ pathname: '/uppsala/restaurants/' }} className='Visa-alla' >Visa alla</Link>
                                }
                            />


                        </LoadingErrorHandld>


                        <LoadingErrorHandld loading={loading} error={error} TextNotItems={ErrorServer} type={LoadingSkeletonHomeCart}  >
                            <RestrangeItems
                                home={stores}
                                Title={TextButiker}
                                TheRedirect={
                                    <Link to={{ pathname: '/uppsala/butiker/' }} className='Visa-alla' >Visa alla</Link>
                                }


                            />
                        </LoadingErrorHandld>



                        {userInfo?.email &&
                            <div className='LoginDriverScreen'>

                                <LoginDriverScreen />


                            </div>
                        }

                        <LoadingErrorHandld loading={loadingFreedelivery} error={errorFreedelivery} TextNotItems={ErrorServer} type={LoadingSkeletonHomeCart} >
                            <RestrangeItems home={freedelivery} Title={Textfree} />
                        </LoadingErrorHandld>


                        <LoadingErrorHandld loading={loadingCategory} error={errorCategory} TextNotItems={ErrorServer} type={LoadingSkeletonHomeCart}>
                            <CategoryScreen category={category} Title={TextCategory} />
                        </LoadingErrorHandld>




                    </Col>

                </Row>






            </Container>

        </TimeContext>
    </LoadingErrorHandld>






}



















