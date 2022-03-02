import './VisaProducts.css'
import { Container, Row, Col } from 'react-bootstrap'
import NavBarCity from '../NavBarCity/NavBarCity'
import FilterProducts from '../../Components/Update/FilterProducts/FilterProducts'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FatchButik, GetCartInfoHomeRestranges } from '../../redux/Action/CartItemAction'
import LoadingErrorHandle from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import VisaProductItems from './VisaProductsItems'
import { FilterCategory } from '../../Components/Update/UseContext/FilterCategoryScreen'
export default function VisaProducts({ match }) {



    // restaurant or butik
    const IdMatch = match?.params?.id
    const city = match?.url?.slice(1, 4) === 'upp' ? 'uppsala' : 'gothenburg'

    const { setQueryData } = useContext(FilterCategory)





    const dispatch = useDispatch()
    // get all restrange products....
    const PageHomeRestrange = useSelector((state) => state?.PageHomeRestrange)
    const { loading, home, error } = PageHomeRestrange

    // get all butiker products...
    const pageHomeButiker = useSelector((state) => state?.pageHomeButiker)
    const { loading: loadingButik, butik, error: errorButik } = pageHomeButiker



   



    useEffect(() => {

        if (IdMatch === 'restaurants') {

            return home === null && dispatch(GetCartInfoHomeRestranges({
                city: city,
                productType: "restaurant"
            }))

        } else if (IdMatch === 'butiker') {

            return butik === null && dispatch(FatchButik({
                city: city,
                productType: "butik"
            }))
        } else if (IdMatch) {

            home === null && dispatch(GetCartInfoHomeRestranges({
                city: city,
                productType: "restaurant"
            }))



            return setQueryData(IdMatch)
        }


        // eslint-disable-next-line


    }, [IdMatch, dispatch, home, butik, city, setQueryData])











    return <Container fluid>

        <Title TextTitle='restauranger' />
        <div className='margin-top-category'>
            <NavBarCity ClassNameCategory />
        </div>
        <Row className='justify-content-center'>
            <Col xs={12} sm={12} md={11} lg={11} className='extra-padding-dddd'>

                <div className='visaProduct-css-flex'>
                    <div className='Title-name-products-text'>

                        <h1>{match?.params?.id}</h1>
                    </div>

                    <FilterProducts
                  
                    />


                </div>


                <LoadingErrorHandle
                    loading={IdMatch === 'butiker' ? loadingButik : loading}
                    error={IdMatch === 'butiker' ? errorButik : error}
                    home={IdMatch === 'butiker' ? butik : home}
                    TextNotItems={IdMatch === 'butiker' ? 'butik' : 'restrange'}
                >
                    <Row>
                        <VisaProductItems home={IdMatch === 'butiker' ? butik : home} />
                    </Row>

                </LoadingErrorHandle>

            </Col>
        </Row>

    </Container>

}

