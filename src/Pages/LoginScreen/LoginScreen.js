import { Row, Col, Modal } from 'react-bootstrap'
import ButtomClick from '../../Components/Buttom/Buttom'
import React, { useEffect } from 'react'
import './style.css'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import { user_Login, singUp_action, ForgetPasswordAction, CheckUser } from '../../redux/Action/Auth_Action'
import { useDispatch, useSelector } from 'react-redux'
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen'
import { useState } from 'react'
import CodeError from '../../Components/CodeError/CodeError'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import { FirstNameRest } from '../../Assistant/Selection'
import { ValtionMe, } from '../../Assistant/ValtionMe'
import LogIn from './LogIn'
import SingUp from './SingUp'
import { CloseScreen,CloseUserCheck } from '../../Components/CloseScreen/CloseScreen'
import Styles from '../../Components/Update/StylesComponents/style'

const LoginScreen = (props) => {

    const { loginOpen, setLoginOpen } = props

    const dispatch = useDispatch()



    const [dataLogin, setDataLogin] = useState({ firstname: '', lastname: '', telephone: '', password: '', email: '' })


    // user Info...>
    const userLogin = useSelector((state) => state?.userLogin)
    const { checkeduser, userInfo, error, loading, forgetPassword } = userLogin
    const [singUp, setSingUp] = useState(false)
    const [forget, setForget] = useState(false)

    const clera = () => {

        return setDataLogin({ firstname: '', lastname: '', telephone: '', password: '', email: '' })
    }



    useEffect(() => {

        if (checkeduser === 'no') {
            // console.log('hello')
            return setSingUp(true)
        }

        if (userInfo?.firstname) {

            setSingUp(false)
            setForget(false)
            return setLoginOpen(false)
        }




    }, [checkeduser, userInfo?.firstname, setLoginOpen, setSingUp])








    // handel login......
    const HandleLogin = (e) => {
        e.preventDefault()

        if (forget) {
            if (!ValtionMe(dataLogin?.email, 'isEmail')) {

                return
            }
            console.log('forget password', dataLogin?.email)
            return dispatch(ForgetPasswordAction({ email: dataLogin?.email?.toLowerCase() }))


        }

        if (singUp) {

            if (
                !ValtionMe(dataLogin?.password, 'isPassword') ||
                !ValtionMe(dataLogin?.firstname, 'isUser') ||
                !ValtionMe(dataLogin?.lastname, 'isUser') ||
                !ValtionMe(dataLogin?.telephone, 'isPhone')
            ) {
                return
            }

            // firstname, telephone, lastname, email, password
            const userSingu = {
                firstname: dataLogin?.firstname?.toLowerCase(),
                lastname: dataLogin?.lastname?.toLowerCase(),
                email: dataLogin?.email?.toLowerCase(),
                telephone: dataLogin?.telephone?.toLowerCase(),
                password: dataLogin?.password?.toLowerCase(),


            }

            console.log('sing up')

            return dispatch(singUp_action(userSingu))

        } else {


            if (!ValtionMe(dataLogin?.email, 'isEmail')) return


            if (checkeduser === 'ok') {
                if (!ValtionMe(dataLogin?.email, 'isEmail') || !ValtionMe(dataLogin?.password, 'isPassword')) return

                console.log('login')
                dispatch(user_Login({
                    email: dataLogin?.email?.toLowerCase(),
                    password: dataLogin?.password?.toLowerCase(),
                }))
                return clera()

            }



            console.log('check user...',)
            return dispatch(CheckUser({ email: dataLogin?.email?.toLowerCase() }))


        }




    }







    // modelare close error.....
    const HandleCloseEvery = () => {
        CloseScreen(dispatch)
        setSingUp(false)
        setForget(false)
        return setLoginOpen(!loginOpen)
    }


     // change state for option more
    const HandlenextSingUP = () => {
        CloseUserCheck(dispatch)
        return setSingUp(!singUp)
    }

    const changeState = () =>{
       return CloseUserCheck(dispatch)
    }


    return loginOpen && <Modal className='model-css' show={loginOpen} onHide={HandleCloseEvery}>

        <div className='firs-login-page-one'>
            <div className='login-padding add-Left-right'>
                {singUp &&
                    <ImageScreen
                        ImageIcon={MyOderImage.left}
                        className='Login-Close-Image-rigth'
                        onClick={HandlenextSingUP}
                    />
                }


                <ImageScreen

                    ImageIcon={MyOderImage.close}
                    className={singUp ? 'Login-Close-Image-rigth' : 'Login-Close-Image-rigth left-black'}
                    onClick={HandleCloseEvery}
                />
            </div>

            <div className='login-padding border-bottom-x'>
                <h1 >  Create an account or log in</h1>
            </div>

        </div>




        <div className='loagin-center login-scroll-Heigth'>
            <Row className='justify-content-center'>
                {loading ?
                    <div className='loading-center'>
                        <LoadingScreen />
                    </div>
                    : error ? <CodeError error={error}  onClick={()=>CloseScreen(dispatch)} /> :
                        <Col xs={12} sm={12} md={10} lg={10}>
                            <p className='login-margin-top-bottom text-align-center'>Log in below or create a new {FirstNameRest} account.</p>
                            {singUp ?
                                <SingUp
                                    HandleLogin={HandleLogin}
                                    ValtionMe={ValtionMe}
                                    dataLogin={dataLogin}
                                    setDataLogin={setDataLogin}
                                  
                                />
                                :

                                <LogIn
                                    dataLogin={dataLogin}
                                    setDataLogin={setDataLogin}
                                    HandleLogin={HandleLogin}
                                    ValtionMe={ValtionMe}
                                    setForget={setForget}
                                    forget={forget}
                                    checkeduser={checkeduser}
                                    forgetPassword={forgetPassword}
                                    changeState={changeState}

                                />
                            }

                            <div className='login-margin-top-bottom'>
                                <ButtomClick
                                    title={
                                        singUp ? 'Sing Up' :
                                            forget ? 'Forget Password' :
                                                checkeduser === 'ok' ? 'Login'
                                                    : 'Next'

                                    }
                                    onClick={HandleLogin}
                                    disabled={
                                        singUp ?
                                            !ValtionMe(dataLogin?.firstname, 'isUser') ||
                                            !ValtionMe(dataLogin?.lastname, 'isUser') ||
                                            !ValtionMe(dataLogin?.telephone, 'isPhone') ||
                                            !ValtionMe(dataLogin?.password, 'isPassword')
                                            : forget ? !ValtionMe(dataLogin?.email, 'isEmail')
                                                : checkeduser === 'ok' ? !ValtionMe(dataLogin?.email, 'isEmail') || !ValtionMe(dataLogin?.password, 'isPassword')
                                                    : !ValtionMe(dataLogin?.email, 'isEmail')

                                    }
                                    style={Styles.buttomColorPage}
                                />
                            </div>

                            <div className='login-margin-top-bottom'>
                                <p className='login-text-bottom'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                            </div>


                        </Col>
                }
            </Row>
        </div>




    </Modal>













}


export default LoginScreen



