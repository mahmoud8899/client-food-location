import { Col, Container, Form, Row } from 'react-bootstrap'
import Input from '../../Components/Input/Input'
import ButtomClick from '../../Components/Buttom/Buttom'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ChangePasswordForgetAction } from '../../redux/Action/Auth_Action'
import { useDispatch, useSelector } from 'react-redux'
import ScreenTitle from '../../Components/ScreenTitle/ScreenTitle'
import ScreenAlrt from '../../Components/ScreenAlrt/ScreenAlrt'
import './style.css'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import { ValtionMe } from '../../Assistant/ValtionMe'
import { HandleError } from '../../Assistant/HandleError'
import {CloseScreen} from '../../Components/CloseScreen/CloseScreen'
import  LoadingScreen  from '../../Components/LoadingScreen/LoadingScreen'
export default function ForgetPassword({ match }) {


    const isToken = match.params.id
    const history = useHistory()
    const dispatch = useDispatch()
    const [routerLogin, setRouterLogin] = useState(null)
    const [dataPost, setDataPost] = useState({
        newPassword: '',
        confirmPassword: ''
    })
    const [changeType, setChangeType] = useState(false)


    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, changepassword } = userLogin
    const [timeError,setTimeError] = useState(false)

    useEffect(() => {

        if (!isToken) return history.push('/')

        if (changepassword) {
            return setRouterLogin('change Password')
        }

        if(error){

          

            setTimeError(true)

            setTimeout(()=>{
                history.push('/')
                setTimeError(false)
                CloseScreen(dispatch)
            },5000)
        }


        return()=>{
            setTimeError(false)
            setRouterLogin('')
        }


    }, [isToken, changepassword, history,error,setTimeError,dispatch])






    const ChangePassword = (e) => {
        e.preventDefault()

        if (!ValtionMe(dataPost?.newPassword, 'isPassword') || !ValtionMe(dataPost?.confirmPassword, 'isPassword')) {
            return alert('write new Password...')
        }

        if (dataPost?.newPassword !== dataPost?.confirmPassword) {


            return alert('passwt is not match....')
        }




        const user = {
            _id: isToken,
            password: dataPost?.newPassword
        }
        // console.log(user)
        // console.log('pas',password)

        dispatch(ChangePasswordForgetAction(user))

        // console.log(newPassword?.value, confirmPassword?.value)
    }



    const ViewClick = () => {
        setChangeType(!changeType)
        // console.log('clcik', changeType)
    }



    // redirect
    const PageHome = (e) =>{
        e.preventDefault()
        return history.push('/')
    }

    return <Container fluid>

        <ScreenTitle TextTitle='Change Password' />
        <Row className='justify-content-center'>
            <Col xs={12} sm={10} md={6} lg={6}>

                <Form onSubmit={(e) => ChangePassword(e)} className='change-password'>
                    {loading ? <LoadingScreen /> :
                        error ?

                            <ScreenAlrt
                                userCheck
                                alertid={timeError}
                                textName={HandleError(error)}
                            />
                            :

                            routerLogin ?
                                <div className="create_singUp" onClick={(e)=>PageHome(e)}>
                                    Thank you, the password has been
                                    changed. You can go to the
                                    main page and log in
                                    again
                                </div>
                                :

                                <>


                                    <h1>change your Password</h1>

                                    <Input

                                        placeholder='Change password'
                                        onChange={(e) => setDataPost({ ...dataPost, newPassword: e.target.value })}
                                        value={dataPost?.newPassword}
                                        onKeyPress={(e) => e.key === 'Enter' ? ChangePassword(e) : null}
                                        className='Input-type-style'
                                        ImageLog={MyOderImage.password}
                                        ViewClick={ViewClick}
                                        type={changeType ? 'text' : 'password'}
                                        ImageView={dataPost?.newPassword?.length >= 1 ? 'true' : null}
                                        validation={ValtionMe(dataPost?.newPassword, 'isPassword').toString()}

                                    />

                                    <Input
                                        placeholder='Confirm password'
                                        onChange={(e) => setDataPost({ ...dataPost, confirmPassword: e.target.value })}
                                        value={dataPost?.confirmPassword}
                                        className='Input-type-style'
                                        validation={ValtionMe(dataPost?.confirmPassword, 'isPassword').toString()}
                                        ViewClick={ViewClick}
                                        type={changeType ? 'text' : 'password'}
                                        ImageView={dataPost?.confirmPassword?.length >= 1 ? 'true' : null}
                                        ImageLog={MyOderImage.password}
                                        onKeyPress={(e) => e.key === 'Enter' ? ChangePassword(e) : null}
                                    />
                                    <div className='save-change'>
                                        <ButtomClick
                                            title='Save'
                                            disabled={!ValtionMe(dataPost?.newPassword, 'isPassword') || !ValtionMe(dataPost?.confirmPassword, 'isPassword')}
                                        />
                                    </div>


                                </>


                    }

                </Form>
            </Col>
        </Row>
    </Container>
}

