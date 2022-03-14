import Title from '../../Components/ScreenTitle/ScreenTitle'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { FirstNameRest } from '../../Assistant/Selection'
import NavBarCity from '../NavBarCity/NavBarCity'
// FatchButik, FirDeliveryAction, FoodTypesAction, GetCartInfoHomeRestranges,
import {  NewRestrangesAction } from '../../redux/Action/CartItemAction'
// import CarouselItems from './Carousel/Carousel'
import RestrangeItems from './RestrangeItems/RestrangeItems'
import LoadingErrorHandld from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
// import LoginDriverScreen from './LoginDriverScreen/LoginDriverScreen'
// import CategoryScreen from './CategoryScreen/CategoryScreen'
import {ErrorServer} from '../../Assistant/TextError'
import { useEffect } from 'react'
import './Home.css'




export default function HomeScreen(props) {

    const { match } = props


     const LocationPath = match.params.id

    const dispatch = useDispatch()


    // get all butiker products...
    const pageHomeNewRestrange = useSelector((state) => state?.pageHomeNewRestrange)
    const { loading: loadingNyrestranges, nyrestranges, error: errorNyrestranges } = pageHomeNewRestrange






    useEffect(() => {


        


        nyrestranges === null && dispatch(NewRestrangesAction({
            city: LocationPath,
            productType: "restaurant"
        }))
    
    }, [  LocationPath, dispatch,nyrestranges ])














    // [1]  LoadingErrorHandld this is check out error and loading if not error coming data  
    // [2]  Limit new restrange max 8 itmes.
    // [3] fir delivery
    // [4] cateory all



    return <Container fluid>
        <Title TextTitle={FirstNameRest} />




        <div className='margin-top-like'>
            <NavBarCity ClassNameHOMEactive />
        </div>


        <Row className='justify-content-center'>

            <Col xs={12} sm={12} md={11} lg={11}>

                <LoadingErrorHandld
                    loading={loadingNyrestranges}
                    error={errorNyrestranges}
                    TextNotItems={ErrorServer}


                >


                    <RestrangeItems
                        home={nyrestranges}
                        Title='Nya Restauranger'
                        newRest
                    />
                </LoadingErrorHandld>


            </Col>

        </Row>






    </Container>






}


        // home === null && dispatch(GetCartInfoHomeRestranges({
        //     city: LocationPath,
        //     productType: "restaurant"
        // }))
            // butik === null && dispatch(FatchButik({
        //     city: LocationPath,
        //     productType: "butik"
        // }))
        // firdelivery === null && dispatch(FirDeliveryAction())
        // category === null && dispatch(FoodTypesAction())
                // home,
            // butik,
        // firdelivery,
        // category

    // const userInfo = useSelector((state) => state?.userLogin?.userInfo)

        // // get all restrange products....
    // const PageHomeRestrange = useSelector((state) => state?.PageHomeRestrange)
    // const { loading, home, error } = PageHomeRestrange

    // // get all butiker products...
    // const pageHomeButiker = useSelector((state) => state?.pageHomeButiker)
    // const { loading: loadingButik, butik, error: errorButik } = pageHomeButiker
        // // get all category...
    // const pageHomeCategory = useSelector((state) => state?.pageHomeCategory)
    // const { loading: loadingCategory, category, error: errorCategory } = pageHomeCategory
    // // fir delivery
    // const pageHomeFirDelivery = useSelector((state) => state?.pageHomeFirDelivery)
    // const { loading: loadingFirdelivery, firdelivery, error: errorFirdelivery } = pageHomeFirDelivery

        
                // <LoadingErrorHandld
                //     loading={loading}
                //     error={error}
                //     home={home}
                //     TextNotItems=''
                // >
                //     <CarouselItems
                //         home={home}
                //     />
                //     <RestrangeItems
                //         home={home}
                //         Title='Handplockat! 💥'
                //     />
                // </LoadingErrorHandld>


                // {/* onlay butik */}
                // <LoadingErrorHandld
                //     loading={loadingButik}
                //     error={errorButik}
                //     home={butik}
                //     TextNotItems='Butiker Som Leverare Till Dig'
                // >
                //     <RestrangeItems
                //         home={butik}
                //         Title='Butiker Som Leverare Till Dig'
                //     />

                // </LoadingErrorHandld>

                // <LoadingErrorHandld
                //     loading={loadingFirdelivery}
                //     error={errorFirdelivery}
                //     home={firdelivery}
                //     TextNotItems='Fri Leverans'
                // >
                //     <RestrangeItems
                //         home={firdelivery}
                //         Title='Fri Leverans'
                //     />

                // </LoadingErrorHandld>
                // {userInfo?.firstname && <LoginDriverScreen />}

                // <LoadingErrorHandld
                //     loading={loadingCategory}
                //     error={errorCategory}
                //     home={category}
                //     TextNotItems='not category....'

                // >

                //     <CategoryScreen category={category} />
                // </LoadingErrorHandld>





