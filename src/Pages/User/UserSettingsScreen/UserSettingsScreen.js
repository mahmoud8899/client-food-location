import { Row, Container, Col } from 'react-bootstrap'
import UserNavBarScreen from '../UserNavBarScreen/UserNavBarScreen'
import '../UserProfileScreen/Profile.css'
import Title from '../../../Components/ScreenTitle/ScreenTitle'
import Styles from '../UserProfileScreen/style'
import UserChange from '../../../Components/UserChange/UserChange'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Action_logout } from '../../../redux/Action/Auth_Action'
import { useDispatch } from 'react-redux'
import UserVerifiedID from '../../../Components/Update/UserVerifiedID/UserVerifiedID'


export default function UserSettingsScreen(props) {



    const [openName, setOpenName] = useState(false)


    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state?.userLogin)
    const { userInfo } = userLogin



    const HandleLogoUt = (e) => {
        e.preventDefault()
        return dispatch(Action_logout())
    }






    return <UserVerifiedID>
        <Container>

            <Title TextTitle='Setting' />


            <Row className="justify-content-center margin-top-class" >

                <Col xs={12} sm={12} md={12} lg={12} >
                    <div className='myprofile'>
                        <h1>Profile</h1>
                    </div>

                </Col>


                <Col xs={12} sm={12} md={12} lg={12}>


                    <UserNavBarScreen ClassNameSetting />

                    <div className='margin-bottom-class'>  </div>

                </Col>


                <Col xs={12} sm={12} md={12} lg={8} className='heigth-margin' >




                    <div className='box-Setting'>
                        <div className='box-setting-children'>
                            <h1>Nmae</h1>
                            <h1 style={Styles.ColorSetting} onClick={(e) => setOpenName(true)}>
                                {userInfo?.firstname} {userInfo?.lastname}
                            </h1>
                        </div>
                        <div className='box-setting-children'>
                            <h1>Send receipts to email</h1>
                            <div className='check-box-me'>
                                <span className='check-box-me-c check-box-me-left'></span>
                            </div>
                        </div>

                        <div className='box-setting-children'>
                            <h1>Log out of UppsalaMat</h1>
                            <h1 style={Styles.ColorSetting} onClick={HandleLogoUt}>Log out</h1>
                        </div>
                    </div>



                    {openName &&
                        <div className='Add_open_Adress open' >

                            <UserChange

                                setOpenName={setOpenName}
                            />
                        </div>


                    }









                </Col>
            </Row>
        </Container>
    </UserVerifiedID>


}