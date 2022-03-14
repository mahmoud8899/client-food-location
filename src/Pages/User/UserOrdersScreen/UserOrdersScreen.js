import { Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Styles from '../../../Components/Update/StylesComponents/style'
import InfiniteScroll from 'react-infinite-scroll-component'
import { OrdersUserAction } from '../../../redux/Action/Order_Action'
import UserNavBarScreen from '../UserNavBarScreen/UserNavBarScreen'
import LoadingErrorHandle from '../../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen'
import { ErrorServer } from '../../../Assistant/TextError'
import '../UserProfileScreen/Profile.css'
import ItemsOrders from './ItemsOrders'
import { useEffect } from 'react'


const UserOrdersScreen = (props) => {
    const { history } = props



    const dispatch = useDispatch()

    // check out....
    const loading = false
    // user info check 
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    // handle 
    const myOrder = useSelector((state) => state?.myOrder)
    const { UserOrders, nextNumber, error } = myOrder




    // get all orders....
    // check ut user online....
    useEffect(() => {

        if (userInfo?.firstname) {
            return UserOrders?.length === 0 && dispatch(OrdersUserAction())
        } else {

            return history.puhs('/uppsala')
        }


    }, [dispatch, UserOrders, nextNumber, userInfo,history])






    // fatch user.......... more data
    const fetchData = () => {
        if (nextNumber >= 1) {
            return dispatch(OrdersUserAction())
        }
    }






    return <Container>


        <Row className="justify-content-center margin-top-class" >


            <Col xs={12} sm={12} md={12} lg={12} >
                <div className='myprofile'>
                    <h1>Profil</h1>
                </div>

            </Col>


            <Col xs={12} sm={12} md={12} lg={12}>


                <UserNavBarScreen ClassNameOrder />

                <div className='margin-bottom-class'>  </div>

            </Col>

            <Col xs={12} sm={12} md={12} lg={8} >
                <div className={error ? 'error-handle-error' : ''}>
                    <LoadingErrorHandle
                        error={error}
                        loading={loading}
                        TextNotItems={ErrorServer}

                    >
                        <InfiniteScroll
                            style={Styles.hidden}
                            dataLength={UserOrders.length}
                            next={fetchData}
                            hasMore={nextNumber === null ? false : true}
                            loader={nextNumber === null ? false : <LoadingScreen />}
                        >

                            <ItemsOrders UserOrders={UserOrders} history={history} />

                        </InfiniteScroll>

                    </LoadingErrorHandle>
                </div>

            </Col>





        </Row>
    </Container>






}



export default UserOrdersScreen







//     </Col>
// </Row>
// </Container>



