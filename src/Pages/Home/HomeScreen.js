import './Home.css'
import { useEffect } from 'react'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { FirstNameRest } from '../../Assistant/Selection'
import NavBarCity from '../NavBarCity/NavBarCity'
import { FatchButik, FirDeliveryAction, FoodTypesAction, GetCartInfoHomeRestranges, NewRestrangesAction } from '../../redux/Action/CartItemAction'
import CarouselItems from './Carousel/Carousel'
import RestrangeItems from './RestrangeItems/RestrangeItems'
import LoadingErrorHandld from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import LoginDriverScreen from './LoginDriverScreen/LoginDriverScreen'
import CategoryScreen from './CategoryScreen/CategoryScreen'

export default function HomeScreen(props) {

    const { match } = props



    const userInfo = useSelector((state) => state?.userLogin?.userInfo)
    const LocationPath = match.params.id
    const dispatch = useDispatch()
    // get all restrange products....
    const PageHomeRestrange = useSelector((state) => state?.PageHomeRestrange)
    const { loading, home, error } = PageHomeRestrange

    // get all butiker products...
    const pageHomeButiker = useSelector((state) => state?.pageHomeButiker)
    const { loading: loadingButik, butik, error: errorButik } = pageHomeButiker

    // get all butiker products...
    const pageHomeNewRestrange = useSelector((state) => state?.pageHomeNewRestrange)
    const { loading: loadingNyrestranges, nyrestranges, error: errorNyrestranges } = pageHomeNewRestrange

    // get all category...
    const pageHomeCategory = useSelector((state) => state?.pageHomeCategory)
    const { loading: loadingCategory, category, error: errorCategory } = pageHomeCategory


    // fir delivery
    const pageHomeFirDelivery = useSelector((state) => state?.pageHomeFirDelivery)
    const { loading: loadingFirdelivery, firdelivery, error: errorFirdelivery } = pageHomeFirDelivery




    useEffect(() => {
        home === null && dispatch(GetCartInfoHomeRestranges({
            city: LocationPath,
            productType: "restaurant"
        }))

        nyrestranges === null && dispatch(NewRestrangesAction({
            city: LocationPath,
            productType: "restaurant"
        }))
        butik === null && dispatch(FatchButik({
            city: LocationPath,
            productType: "butik"
        }))
        firdelivery === null && dispatch(FirDeliveryAction())
        category === null && dispatch(FoodTypesAction())
    }, [
        LocationPath,
        dispatch,
        home,
        nyrestranges,
        butik,
        firdelivery,
        category

    ])














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

                {/* home all restrange withut fri delivery */}
                <LoadingErrorHandld
                    loading={loading}
                    error={error}
                    home={home}
                    TextNotItems=''
                >
                    <CarouselItems
                        home={home}
                    />
                    <RestrangeItems
                        home={home}
                        Title='Handplockat! 💥'
                    />
                </LoadingErrorHandld>


                {/* onlay butik */}
                <LoadingErrorHandld
                    loading={loadingButik}
                    error={errorButik}
                    home={butik}
                    TextNotItems='Butiker Som Leverare Till Dig'
                >
                    <RestrangeItems
                        home={butik}
                        Title='Butiker Som Leverare Till Dig'
                    />

                </LoadingErrorHandld>





                <LoadingErrorHandld
                    loading={loadingNyrestranges}
                    error={errorNyrestranges}
                    home={nyrestranges}
                    TextNotItems='Nya Restauranger'

                >


                    <RestrangeItems
                        home={nyrestranges}
                        Title='Nya Restauranger'
                        newRest
                    />
                </LoadingErrorHandld>




                <LoadingErrorHandld
                    loading={loadingFirdelivery}
                    error={errorFirdelivery}
                    home={firdelivery}
                    TextNotItems='Fri Leverans'
                >
                    <RestrangeItems
                        home={firdelivery}
                        Title='Fri Leverans'
                    />

                </LoadingErrorHandld>






                {userInfo?.firstname && <LoginDriverScreen />}

                <LoadingErrorHandld
                    loading={loadingCategory}
                    error={errorCategory}
                    home={category}
                    TextNotItems='not category....'

                >

                    <CategoryScreen category={category} />
                </LoadingErrorHandld>






















            </Col>

        </Row>






    </Container>






}



// result search in home page...
// <SearchingResultHome  /> 















    //   const loaction =   window.location.pathname.splic('/'
    // const cityMatch =  match?.path
    // const cityLength = cityMatch?.length
    // const removeFirst = cityMatch.slice(1, Number(cityLength -1))
    // console.log(location)
    // console.log(match?.path)
    // restarnge page some city....

    // // start from here.........................................................................>


    // const [idProduct, setIdProduct] = useState('')
    // const [active, setActive] = useState(null)



    // const dispatch = useDispatch()

    // // product top ..... next and next 
    // const Products = useSelector((state) => state?.Products)

    // const { loading, ProductTop, ProductLast } = Products

    // const ListCategory = useSelector((state) => state?.ListCategory)

    // const { category } = ListCategory



    // useEffect(() => {

    //     ProductTop === null && dispatch(LastProductAction())
    //     ProductLast === null && dispatch(ProductTopAction())
    //     // category?.length === 0 && dispatch(getCategoryAction())

    //     // eslint-disable-next-line

    // }, [
    //     dispatch,
    //     ProductLast,
    //     ProductTop,
    //     category?.length

    // ])




// <Carousel
// ProductTop={ProductTop}
// loading={loading}
// />


                    // {/* searching */}

                    // {/* category */}
                    // <div className='newrest'>
                    //     <div className='box-font'>category</div>
                    // </div>

                    // <ListFood
                    //     setIdProduct={setIdProduct}
                    //     active={active}
                    //     setActive={setActive}

                    // />




                    // {/* products */}

                    // <ItemsCart
                    //     active={active}
                    //     setActive={setActive}
                    //     idProduct={idProduct}
                    //     setIdProduct={setIdProduct}
                    // />


                    // {/* last products */}
                    // <SliderFood
                    //     post={ProductLast}
                    //     loading={loading}
                    // />








