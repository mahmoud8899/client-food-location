import { Container, Row, Col } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import Title from '../../../Components/ScreenTitle/ScreenTitle'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { GetUserInfoAction } from '../../../redux/Action/Auth_Action'
import UserNavBarScreen from '../UserNavBarScreen/UserNavBarScreen'
import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen'
import { SliceNameNot } from '../../../Assistant/Slice'
import ScreenLike from '../../Like/Like'
import UserAddTelefonNumber from '../UserAddTelefonNumber/UserAddTelefonNumber'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import { LikePage } from '../../../Components/Update/Redirction/Redirction'
import UserVerifiedID from '../../../Components/Update/UserVerifiedID/UserVerifiedID'
import './Profile.css'
import Styles from './style'
const UserProfileScreen = () => {



    const dispatch = useDispatch()
    const history = useHistory()



    // user info...
    const userLogin = useSelector((state) => state.userLogin)
    const { token, userInfo, loading, successfully } = userLogin
    const [openAddNumber, setOpenAddNumber] = useState(false)


    useEffect(() => {

        if (token) {
            return dispatch(GetUserInfoAction(token))
        }

        // else {
        //     history.push('/')
        // }

    }, [dispatch, history, token])

    useEffect(() => {

        if (!userInfo?.telephone) {
            return setOpenAddNumber(true)
        }
        return () => {
            setOpenAddNumber(false)
        }

    }, [userInfo?.telephone, setOpenAddNumber])




    const LikeLength = useSelector((state) => state.like?.likeCart)




    return <UserVerifiedID>
        <Container>

            <Title TextTitle={`Profile : ${userInfo?.firstname}`} />

            <Row className="justify-content-center margin-top-class" >
                {loading ?
                    <LoadingScreen />
                    :
                    <>


                        <Col xs={12} sm={12} md={12} lg={12} >
                            <div className='myprofile'>
                                <h1>Profile</h1>
                            </div>

                        </Col>



                        <Col xs={12} sm={12} md={12} lg={12}>


                            <UserNavBarScreen
                                ClassNameProfile

                            />

                            <div className='margin-bottom-class'>  </div>

                        </Col>


                        <Col xs={12} sm={12} md={12} lg={8}>

                            <div className='class-box'>
                                <div className='image-box-css'>
                                    {SliceNameNot(userInfo?.firstname, 1)} {SliceNameNot(userInfo?.lastname, 1)}
                                </div>

                                <div className='class-profile-name'>
                                    <h1>{userInfo?.firstname} {userInfo?.lastname}</h1>
                                    <div className='classInfo'>
                                        <div className='classInfo-email'>
                                            <span >Email</span>
                                            <span >{userInfo?.email}</span>
                                        </div>

                                        <div className='classInfo-email add-margin-left'>
                                            <span >Phone number</span>
                                            <span >{userInfo?.telephone}</span>
                                        </div>
                                    </div>
                                </div>


                            </div>


                        </Col>

                        <Col xs={12} sm={12} md={12} lg={8}>
                            {LikeLength?.length === 0 ?

                                <div className='class-dina-favoriter'>
                                    <div className='class-profile-name add-notleft'>
                                        <h1>  Dina favoriter</h1>
                                    </div>

                                    <div className='flex-boxc'>
                                        <p>
                                            Lägg till en restaurang eller butik bland dina favoriter genom att klicka på hjärtsymbolen som du hittar i menyn. Dina favoriter visas sedan här.
                                        </p>
                                        <div className='flex-boxc-left'>
                                            <ImageScreen
                                                ImageIcon={MyOderImage.heartFull}
                                                className='Add-din'
                                            />

                                        </div>
                                    </div>

                                </div>


                                :

                                <>

                                    <div className='yourFavorut margin-top-'>

                                        <div className='yourFavorutnavbar'>
                                            <h1>your Favourites</h1>
                                            <div onClick={(e) => LikePage(history)} style={Styles.newBox}>
                                                se all
                                            </div>
                                        </div>
                                    </div>


                                    <Row>
                                        <ScreenLike Hidding />

                                    </Row>

                                </>

                            }

                        </Col>
                    </>
                }
            </Row>


            <UserAddTelefonNumber
                openAddNumber={openAddNumber}
                setOpenAddNumber={setOpenAddNumber}
                successfully={successfully}

            />

        </Container>

    </UserVerifiedID>




}


export default UserProfileScreen


