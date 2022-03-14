import { Container, Row, Col, Modal } from 'react-bootstrap'
import UserNavBarScreen from '../UserNavBarScreen/UserNavBarScreen'
import '../UserProfileScreen/Profile.css'
import Styles from '../../../Components/Update/StylesComponents/style'
import MyAddress from '../../../Components/MyAddress/MyAddress'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserAddressInfo from './UserAddressInfo'
import Title from '../../../Components/ScreenTitle/ScreenTitle'
import AddOpenComponent from '../../../Components/Update/AddOpenComponent/AddOpenComponent'
import { HiOutlineX } from 'react-icons/hi'
import HandleLoadingPage from '../../../Components/Update/HandleLoadingPage/HandleLoadingPage'
import { ErrorServer } from '../../../Assistant/TextError'
import {CloseScreen} from '../../../Components/CloseScreen/CloseScreen'

export default function UserAddresScreen(props) {

    const { history } = props

    const dispatch = useDispatch()

    // open page add address
    const [openAddres, setOpenAddres] = useState(false)
    // user info 
       // user Info.......
       const userLogin = useSelector((state) => state?.userLogin)
       const { userInfo, error, loading } = userLogin


    // check user
    useEffect(() => {
        if (!userInfo?.firstname) return history.push('/uppsala')



    }, [userInfo, history])



    // updated successfully
    const [updateSuccessFully, setUpdateSuccessFully] = useState(false)
     // close page
     const HandleClose = () => {
        CloseScreen(dispatch)
        setUpdateSuccessFully(false)
        setOpenAddres(false)
     }
     // remove error 
     const BackAndRemoveError = () => {

        CloseScreen(dispatch)
        setUpdateSuccessFully(false)
        console.log('remove error')
     }


    return <Container>

        <Title TextTitle='Add Address' />
        <Row className="justify-content-center margin-top-class" >

            <Col xs={12} sm={12} md={12} lg={12} >
                <div className='myprofile'>
                    <h1>Profil</h1>
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
                            <span className='firstBack' >Du har inte sparat några adresser än
                            </span>
                            <span className='firstBack-option'>
                                Add a new address easily below
                            </span>
                        </div>
                    </>
                }

                <div className='addToCart' onClick={(e) => setOpenAddres(true)}>
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
                                onHide={() => HandleClose()}
                            >
                                <HandleLoadingPage
                                    loading={loading}
                                    error={error}
                                    ErrorText={ErrorServer}
                                    updateSuccessFully={updateSuccessFully}
                                    HandleClose={HandleClose}
                                    BackAndRemoveError={BackAndRemoveError}

                                >
                                    <div className='box-alert'>

                                        <div >
                                            <span></span>
                                        </div>

                                        <div className='title-add'>
                                            <span className='title-add-profile'>uppdatera adressuppgifter</span>
                                        </div>

                                        <HiOutlineX className='close-pp-pp-image' onClick={(e) => setOpenAddres(false)} />



                                    </div>



                                    <MyAddress
                                        setOpenAddres={setOpenAddres}
                                        setUpdateSuccessFully={setUpdateSuccessFully}
                                    />




                                </HandleLoadingPage>



                            </Modal>

                        </Row>



                    </>





                }




            </Col>














        </Row>
    </Container>

}

