import { Alert, Col, Row, Image, Form } from 'react-bootstrap'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import Input from '../../Components/Input/Input'
import ButtomClick from '../../Components/Buttom/Buttom'
import { useEffect, useState } from 'react'
import { ChangeUserInfo } from '../../redux/Action/Auth_Action'
import { useDispatch, useSelector } from 'react-redux'
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen'
import ScreenAlrt from '../../Components/ScreenAlrt/ScreenAlrt'
import ImageScreen from '../ImageScreen/ImageScreen'
import Styles from '../Update/StylesComponents/style'
export default function UserChange(props) {


    const { setOpenName } = props

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo, loading } = userLogin




    const dispatch = useDispatch()

    const [firstname, setFirstname] = useState(userInfo?.firstname ? userInfo?.firstname : '')
    const [lastname, setLastname] = useState(userInfo?.lastname ? userInfo?.lastname : '')
    const [alertid, setAlertid] = useState(false)


    useEffect(() => {

        if (alertid) {

            setTimeout(() => {

                setAlertid(false)
                return setOpenName(false)

            }, 3000);
        }

    }, [alertid, setOpenName])


    const HandleChangeUserInfo = (e) => {
        e.preventDefault()

        const user = {
            firstname: firstname?.toLowerCase(),
            lastname: lastname?.toLowerCase()
        }

        dispatch(ChangeUserInfo(user))

        return setAlertid(true)


    }

    return <Row className='justify-content-center'>

        <ScreenAlrt
            userCheck
            alertid={alertid}
            textName='Change user Info...'
        />
        <Col xs={11} ms={4} md={4} lg={4} >
            {loading ? <LoadingScreen /> :
                <Alert variant="light">

                    <ImageScreen
                        ImageIcon={MyOderImage.close}
                        onClick={(e) => setOpenName(false)}
                        className='class-close-image add-left-black'
                    />


                    <Image src={MyOderImage.foodname} className='foodname' />



                    <div className='name-class'>
                        <h1>Name</h1>
                    </div>

                    <Form onSubmit={HandleChangeUserInfo}>

                        <Input
                            placeholder='First name'
                            style={Styles.input}
                            value={firstname}
                            name='firstname'
                            type='text'
                            onChange={(e) => setFirstname(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' ? HandleChangeUserInfo : null}
                        />

                        <Input

                            placeholder='last name'
                            style={Styles.input}
                            value={lastname}
                            name='lastname'
                            type='text'
                            onChange={(e) => setLastname(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' ? HandleChangeUserInfo : null}
                        />


                        <div className='buttom-box'>


                            <div className='buttom-class'>
                                <ButtomClick
                                    title='Cancel'
                                    style={Styles.buttomColorPagenot}
                                />
                            </div>

                            <div className='buttom-class'>
                                <ButtomClick
                                    title='Save'
                                    style={Styles.buttomColorPage}
                                />
                            </div>

                        </div>
                    </Form>




                </Alert>
            }
        </Col>
    </Row>
}