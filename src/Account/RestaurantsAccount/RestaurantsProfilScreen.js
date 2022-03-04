import { Container, Row, Col } from 'react-bootstrap'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import RestaurantsNavBarScreen from './RestaurantsNavBarScreen'
import './style.css'
import AddAccount from '../DriverAccount/DriverProfile/AddAccount'
import { useEffect, useState } from 'react'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
// import ButtomClick from '../../Components/Buttom/Buttom'
import NavBarList from './Datils/NavBarList'
import CartItemsInfo from './Datils/CartItemsInfo'
import { CartInfoActionResturan } from '../../redux/Action/CartItemAction'
import { useDispatch, useSelector } from 'react-redux'
import LoadingErrorHandle from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import EditCartInfo from './Datils/EditCartInfo'


export default function RestaurantsProfilScreen(props) {

    const resturantId = props?.match?.params?.id
    const [openAddAccount, setOpenAddAccount] = useState(false)
    const [show, setShow] = useState({ value: false, updated: false })
    const pageUserCartinfo = useSelector((state) => state.pageUserCartinfo)
    const { loading, info, error } = pageUserCartinfo
    const dispatch = useDispatch()


    useEffect(() => {
        if (resturantId) {

            info?.length === 0 && dispatch(CartInfoActionResturan(resturantId))



        }

    }, [resturantId, dispatch, info?.length,])


    // open acount 
    const OpenBankAcount = (e) => {
        e.preventDefault()

        return setOpenAddAccount(true)
    }













    return <Container>
        <Title TextTitle='product Admin' />
        <div className='box'></div>

        <LoadingErrorHandle loading={loading} error={error} home={info}>
            <Row className='justify-content-center'>

                <Col xs={12} sm={12} md={3} lg={3} >
                    <RestaurantsNavBarScreen
                        classNameSitting
                        OpenBankAcount={OpenBankAcount}

                    />
                </Col>


                <Col xs={12} sm={12} md={9} lg={9} >


                    <NavBarList

                        Other={
                            <div className='Fistclass-handle'>
                                <div className='half-fistclass'>
                                    <ImageScreen ImageIcon={MyOderImage.sales} className='Image-sales' />
                                    <span>sales</span>
                                </div>

                                <div className='Fistclass'>

                                    <span>3029.00$</span>
                                </div>


                            </div>


                        }
                        OtherLast={
                            <div className='Fistclass-handle'>
                                <div className='half-fistclass'>
                                    <ImageScreen ImageIcon={MyOderImage.cancel} className='Image-sales' />
                                    <span>cancel</span>

                                </div>

                                <div className='Fistclass'>

                                    <span>3 items</span>
                                </div>
                            </div>
                        }

                    />





                    <CartItemsInfo
                        info={info}
                        setShow={setShow}
                    />





                </Col>

            </Row>


            <AddAccount
                openAddAccount={openAddAccount}
                setOpenAddAccount={setOpenAddAccount}
            />




        </LoadingErrorHandle>






        <EditCartInfo
            show={show}
            setShow={setShow}
            info={info}
        />




 



    </Container>
}








