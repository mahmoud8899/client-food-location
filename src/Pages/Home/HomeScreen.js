import Title from '../../Components/ScreenTitle/ScreenTitle'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { FirstNameRest } from '../../Assistant/Selection'
import NavBarCity from '../NavBarCity/NavBarCity'
import {  FatchButik, FoodTypesAction, FreeDeliveryAction, NewRestaurantsAction } from '../../redux/Action/CartItemAction'
import RestrangeItems from './RestrangeItems/RestrangeItems'
import LoadingErrorHandld from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import TimeContext from '../../Components/Update/UseContext/TimeContext'
import {ErrorServer ,TextButiker, Textrestaurant,Textfree ,TextCategory} from '../../Assistant/TextError'
import CategoryScreen from './CategoryScreen/CategoryScreen'
import CarouselItems from './Carousel/Carousel'
import { useEffect } from 'react'
import './Home.css'



// FatchButik, FirDeliveryAction, FoodTypesAction, GetCartInfoHomeRestranges,
// import LoginDriverScreen from './LoginDriverScreen/LoginDriverScreen'

export default function HomeScreen(props) {

    // whoy params id
    const { match } = props


    // city name
     const LocationPath = match.params.id

    const dispatch = useDispatch()


    // get new restaurant
    const pageHomeNewRestaurant = useSelector((state) => state?.pageHomeNewRestaurant)
    const { loading: loadingnewRestaurant, newRestaurant, error: errornewRestaurant } = pageHomeNewRestaurant

    // get all restrange and stores....
    const PageHomeRestrange = useSelector((state) => state?.PageHomeRestrange)
    const { loading, error,  stores } = PageHomeRestrange


    // get free delivery from restrest and stores
    const pageHomeFreeDelivery = useSelector((state) => state?.pageHomeFreeDelivery)
    const { loading: loadingFreedelivery, freedelivery, error: errorFreedelivery } = pageHomeFreeDelivery

     // category all 
    const pageHomeCategory = useSelector((state) => state?.pageHomeCategory)
    const { loading: loadingCategory, category, error: errorCategory } = pageHomeCategory


 


    // get all restrange
    useEffect(() => {
        newRestaurant?.length === Number(0) && dispatch(NewRestaurantsAction({
            city: LocationPath,
            productType: "restaurant"
        }))



    
    }, [  LocationPath, dispatch,newRestaurant?.length  ])


    // get all butiker
    useEffect(()=>{
        stores?.length === Number(0) && dispatch(FatchButik({
            city: LocationPath,
            productType: "butiker"
        }))

       

    },[stores?.length,LocationPath,dispatch])



        // free delivery
        useEffect(()=>{
            
            freedelivery?.length === Number(0) && dispatch(FreeDeliveryAction(LocationPath))
    
        },[LocationPath,dispatch,freedelivery?.length])





        // category
        useEffect(()=>{
            
            category.length === Number(0) && dispatch(FoodTypesAction())
    
        },[dispatch,category.length])

       






    // [1]  LoadingErrorHandld this is check out error and loading if not error coming data  
    // [2]  Limit new restrange max 8 itmes. and Carousel some data
    // [3] : stores 
    // [4] : free category 
    // [5]   class name category ....>   CategoryScreen  




 

    return <TimeContext>
      <Container fluid>
        <Title TextTitle={FirstNameRest} />
        <div className='margin-top-like'>
            <NavBarCity ClassNameHOMEactive />
        </div>


        <Row className='justify-content-center'>

            <Col xs={12} sm={12} md={11} lg={11}>

                <LoadingErrorHandld  loading={loadingnewRestaurant} error={errornewRestaurant} TextNotItems={ErrorServer} >
                    <CarouselItems     home={newRestaurant}   />
                    <RestrangeItems  home={newRestaurant} Title={Textrestaurant} newRest/>
                </LoadingErrorHandld>

                 <LoadingErrorHandld  loading={loading} error={error}  TextNotItems={ErrorServer} >
                     <RestrangeItems  home={stores} Title={TextButiker}  />
                 </LoadingErrorHandld>


                 


                 <LoadingErrorHandld  loading={loadingFreedelivery} error={errorFreedelivery}  TextNotItems={ErrorServer} >
                     <RestrangeItems  home={freedelivery} Title={Textfree}  />
                 </LoadingErrorHandld>

                 <LoadingErrorHandld loading={loadingCategory} error={errorCategory} TextNotItems={ErrorServer}>
                    <CategoryScreen category={category} Title={TextCategory} />
                </LoadingErrorHandld>


            </Col>

        </Row>






    </Container>
    </TimeContext>   






}

