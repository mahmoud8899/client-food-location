import { Container, Row, Col, Modal } from 'react-bootstrap'
import UserNavBarScreen from '../UserNavBarScreen/UserNavBarScreen'
import '../UserProfileScreen/Profile.css'
import Styles from '../UserProfileScreen/style'
import MyAddress from '../../../Components/MyAddress/MyAddress'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import UserAddressInfo from './UserAddressInfo'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import Title from '../../../Components/ScreenTitle/ScreenTitle'
import AddOpenComponent from '../../../Components/Update/AddOpenComponent/AddOpenComponent'

export default function UserAddresScreen({ history }) {

    const [openAddres, setOpenAddres] = useState(false)

    const userInfo = useSelector((state) => state?.userLogin?.userInfo)


    useEffect(() => {

        if (!userInfo?.firstname) {

            return history.push('/')
        }

    }, [history, userInfo?.firstname])









    return <Container>

        <Title TextTitle='Add Address' />
        <Row className="justify-content-center margin-top-class" >

            <Col xs={12} sm={12} md={12} lg={12} >
                <div className='myprofile'>
                    <h1>Profile</h1>
                </div>

            </Col>




            <Col xs={12} sm={12} md={12} lg={12}>


                <UserNavBarScreen ClassNameAddress />

                <div className='margin-bottom-class'>  </div>

            </Col>


            <Col xs={12} sm={12} md={12} lg={8} className='heigth-margin' >


                {userInfo?.firstname ?


                    <UserAddressInfo
                        userInfo={userInfo}
                        setOpenAddres={setOpenAddres}
                    />
                    :

                    <>



                        <div className='addToCart-option'>
                            <span className='firstBack' >You haven’t saved any addresses yet
                            </span>
                            <span className='firstBack-option'>
                                Add a new address easily below
                            </span>
                        </div>
                    </>
                }

                <div className='addToCart'  onClick={(e) => setOpenAddres(true)}>
                    <AddOpenComponent
                        Titel='Add Your address'
                        style={Styles.addPayment}
                        className='className-link'
                        classNameTitle='className-linkleft'
                        
                    />



                </div>





                {openAddres &&

                    <>

                        <Row className="justify-content-center" >


                            <Modal
                                show={openAddres}
                                fullscreen='sm-down'
                                onHide={() => setOpenAddres(false)}
                            >

                                <div className='box-alert'>

                                    <div >
                                        <span></span>
                                    </div>

                                    <div className='title-add'>
                                        <span className='title-add-profile'>Edit address details</span>
                                    </div>


                                    <ImageScreen
                                        ImageIcon={MyOderImage.close}
                                        className='class-close-image'
                                        onClick={(e) => setOpenAddres(false)}
                                    />



                                </div>



                                <MyAddress
                                    setOpenAddres={setOpenAddres}
                                />

                            </Modal>

                        </Row>



                    </>





                }




            </Col>














        </Row>
    </Container>
}



//  <div className='addToCart' >
//                     <div className='addtext-align' style={Styles.addPayment}>
//                         <span>+</span>
//                         <span>Add Your address</span>
//                     </div>
//                 </div> 