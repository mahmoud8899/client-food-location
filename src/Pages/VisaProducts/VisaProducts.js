import { Container, Row, Col } from 'react-bootstrap'
import NavBarCity from '../NavBarCity/NavBarCity'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import { useDispatch, useSelector } from 'react-redux'
import { FatchButik, GetCartInfoHomeRestranges } from '../../redux/Action/CartItemAction'
import LoadingErrorHandle from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import FilterProducts from '../../Components/Update/FilterProducts/FilterProducts'
import { FilterCategory } from '../../Components/Update/UseContext/FilterCategoryScreen'
import VisaProductItems from './VisaProductsItems'
import { ErrorServer, LoadingSkeletonHomeCart } from '../../Assistant/TextError'
import { useContext, useEffect } from 'react'
import './VisaProducts.css'
import { UserLoaction } from '../LoactionPage/LoactionPage'
export default function VisaProducts(props) {

    // option   // params  
    // [1] filter category with restrant  class name FilterCategoryScreen
    // [2] : NavBarCity navbar selection restrant or butike
    // [3] : class name what is selection match?.params?.id
    // [4] : class name filter to category FilterProducts --- stopp now
    // [5] : class name LoadingErrorHandle : error loading






    const { match, location } = props

    const { lat, long, loading: LoadingLocation } = useContext(UserLoaction)

    // restaurant or butik
    const IdMatch = match?.params?.id
    const city = match?.url?.slice(1, 4) === 'upp' ? 'uppsala' : 'gothenburg'


    // filter category...
    const { setAddCart } = useContext(FilterCategory)


    const dispatch = useDispatch()

    // get all restrange and stores....
    const PageHomeRestrange = useSelector((state) => state?.PageHomeRestrange)
    const { loading, home, error, nextNumber, stores, nextstoresnumber } = PageHomeRestrange









    //  git all [1] :restrant 
    //  [2] stores 
    //  [3] set searching category    class name setAddCart
    useEffect(() => {


        if (IdMatch === 'butiker' && lat !== null && long !== null) {

            return stores?.length === Number(0) && dispatch(FatchButik({
                lat: lat,
                long: long,
                productType: "butiker"
            }))
        }


        if (IdMatch === 'restaurants' && lat !== null && long !== null) {
            home?.length === Number(0) && dispatch(GetCartInfoHomeRestranges({
                lat: lat,
                long: long,
                productType: "restaurant"
            }))
            return IdMatch !== 'restaurants' && setAddCart([IdMatch])

        }








        // eslint-disable-next-line


    }, [IdMatch, dispatch, home?.length, city, stores?.length, setAddCart, lat, long])










    return <LoadingErrorHandle loading={LoadingLocation}>
        <Container fluid>

            <Title TextTitle={match?.params?.id} />

            <div className='margin-top-category'>
                <NavBarCity ClassNameCategory={IdMatch === 'restaurants'} ClassNameLike={IdMatch === 'butiker'} />
            </div>


            <Row className='justify-content-center'>
                <Col xs={12} sm={12} md={11} lg={11} className='extra-padding-dddd'>

                    <div className='visaProduct-css-flex'>
                        <div className='Title-name-products-text'>
                            <h1>{match?.params?.id}</h1>
                        </div>

                        <FilterProducts location={location?.search} />

                    </div>
                    <LoadingErrorHandle loading={loading} error={error} TextNotItems={ErrorServer} type={LoadingSkeletonHomeCart} >
                        <Row>
                            <VisaProductItems
                                home={IdMatch === 'butiker' ? stores : home}
                                fetchMore={IdMatch === 'butiker' ? nextstoresnumber : nextNumber}
                                IdMatch={IdMatch}
                                long={long}
                                lat={lat}
                            />
                        </Row>
                    </LoadingErrorHandle>


                </Col>
            </Row>


        </Container>
    </LoadingErrorHandle>



}


