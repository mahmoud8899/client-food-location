import { Container, Row, Col, Modal } from 'react-bootstrap'
import UserNavBarScreen from '../UserNavBarScreen/UserNavBarScreen'
import '../UserProfileScreen/Profile.css'
import Styles from '../../../Components/Update/StylesComponents/style'
import MyAddressLocation from '../../../Components/MyAddress/MyAddressLocation'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserAddressInfo from './UserAddressInfo'
import Title from '../../../Components/ScreenTitle/ScreenTitle'
import AddOpenComponent from '../../../Components/Update/AddOpenComponent/AddOpenComponent'
import { HiArrowNarrowLeft, HiOutlineX } from 'react-icons/hi'
import HandleLoadingPage from '../../../Components/Update/HandleLoadingPage/HandleLoadingPage'
import { ErrorServer } from '../../../Assistant/TextError'
import { CloseScreen } from '../../../Components/CloseScreen/CloseScreen'

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






    // close navBar add address.......................>
    const [nextStep, setNextStep] = useState(false)
    const [oppenMpas, setOppenMaps] = useState(false)
    // handel city
    const HandleCity = (Event) => {
        Event.preventDefault()
        if (oppenMpas) {
            setOppenMaps(!oppenMpas)
            return console.log('close Maps')
        }


        if (nextStep) {

            return setNextStep(!nextStep)
        }

       
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

                <div className='margin-bottom-class'> </div>

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
                        Titel='Lägg till din adress'
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
                                            {nextStep && <HiArrowNarrowLeft
                                                className='close-pp-pp-image'
                                                onClick={(e) => HandleCity(e)}
                                            />}
                                        </div>

                                        <div className='title-add'>
                                            <span className='title-add-profile'>Lägg Till Ny Adress</span>
                                        </div>

                                        <HiOutlineX className='close-pp-pp-image' onClick={(e) => setOpenAddres(false)} />



                                    </div>



                                    <MyAddressLocation
                                        setOpenAddres={setOpenAddres}
                                        setUpdateSuccessFully={setUpdateSuccessFully}
                                        nextStep={nextStep}
                                        setNextStep={setNextStep}
                                        oppenMpas={oppenMpas}
                                        setOppenMaps={setOppenMaps}
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



//uppdatera adressuppgifter