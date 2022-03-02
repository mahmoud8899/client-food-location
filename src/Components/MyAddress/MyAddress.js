import { Row, Col, Form, Image, } from 'react-bootstrap'
import ButtomClick from '../Buttom/Buttom'
import Input from '../Input/Input'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { AddAdressUserAction } from '../../redux/Action/Auth_Action'
import Styles from './style'

import { MyOderImage } from '../../Assistant/MyOrderImage'
import './style.css'
import { addresSelection } from '../../Assistant/Selection'
import ScreenAlrt from '../../Components/ScreenAlrt/ScreenAlrt'

const MyAddress = (props) => {


    const { ClassNamePayment, setOpenAddres } = props


    const dispatch = useDispatch()


    // user Info.......
    const userLogin = useSelector((state) => state?.userLogin)
    const { userInfo } = userLogin
    // create user address....
    const [dataPost, setPostData] = useState({
        addres: userInfo?.Adress?.addres ? userInfo?.Adress?.addres : '',
        homeNumber: userInfo?.Adress?.homeNumber ? userInfo?.Adress?.homeNumber : '',
        city: userInfo?.Adress?.city ? userInfo?.Adress?.city : '',
        work: userInfo?.Adress?.work ? userInfo?.Adress?.work : '',
        zipcode: userInfo?.Adress?.zipcode ? userInfo?.Adress?.zipcode : ''
    })


    const [setTime, setSetTime] = useState(false)


    const HandelChangeAddres = (e) => {
        e.preventDefault()

        if (dataPost?.homeNumber?.length <= 1 || dataPost?.addres?.length <= 10 || dataPost?.city?.length <= 5 || dataPost?.zipcode?.length <= 3) {
            return
        }



        const userAddrees = {
            addres: dataPost?.addres,
            homeNumber: dataPost?.homeNumber,
            city: dataPost?.city,
            work: dataPost?.work,
            zipcode: dataPost?.zipcode,
            ClassAddAddress: true
        }
        console.log('clcikkkk')
        dispatch(AddAdressUserAction(userAddrees))
        setSetTime(true)
        setTimeout(() => {
            setSetTime(false)
            setOpenAddres(false)
        }, 3000)

        return

    }




    // validation.....
    const validation = (name, max = 10) => {

        return name?.length >= max && 'true'

    }



    return <Form onSubmit={HandelChangeAddres} className='POstion-form'>
        <div className={ClassNamePayment ? null : 'scroll-bottom-style'}>


            

                <Input
                    title='Street address and building number'
                    type='text'
                    placeholder='Street address and building number'
                    onChange={(e) => setPostData({ ...dataPost, addres: e.target.value })}
                    value={dataPost?.addres}
                    name='address'
                    style={Styles.input}
                    ImageLog={MyOderImage.address}
                    validation={validation(dataPost?.addres, 4)}
                    onKeyPress={(e) => e.key === 'Enter' ? HandelChangeAddres(e) : null}
                />


                <Input
                    title='Details (door number, apartment)'
                    type='text'
                    placeholder='Details (door number, apartment)'
                    onChange={(e) => setPostData({ ...dataPost, homeNumber: e.target.value })}
                    value={dataPost?.homeNumber}
                    name='homeNumber'
                    style={Styles.input}
                    ImageLog={MyOderImage.number}
                    validation={validation(dataPost?.homeNumber, 1)}
                    onKeyPress={(e) => e.key === 'Enter' ? HandelChangeAddres(e) : null}
                />


                <Input
                    title='city'
                    type='text'
                    placeholder='city'
                    required
                    onChange={(e) => setPostData({ ...dataPost, city: e.target.value })}
                    value={dataPost.city}
                    name='city'
                    style={Styles.input}
                    ImageLog={MyOderImage.cityB}
                    validation={validation(dataPost?.city, 4)}
                    onKeyPress={(e) => e.key === 'Enter' ? HandelChangeAddres(e) : null}
                />






                <div className='MyPhone'>

                    <span>+44{userInfo?.telephone}</span>
                </div>

                <Input
                    title='Zip Code'
                    type='text'
                    placeholder='Zip Code'
                    required
                    onChange={(e) => setPostData({ ...dataPost, zipcode: e.target.value })}
                    value={dataPost?.zipcode}
                    name='zipcode'
                    style={Styles.input}
                    ImageLog={MyOderImage.zip}
                    validation={validation(dataPost?.zipcode, 4)}
                    onKeyPress={(e) => e.key === 'Enter' ? HandelChangeAddres(e) : null}
                />




                <div className='selectionHome'>
                    {addresSelection?.map((wo, Index) => (
                        <div
                            className={dataPost?.work === wo?.name ? 'openSelection action' : 'openSelection'}
                            style={Styles.colorLine}
                            key={Index}
                            onClick={(e) => setPostData({ ...dataPost, work: wo?.name })}

                        >
                            <span>{wo?.name}</span>
                            <Image src={wo?.image}
                                className='Image-selection'
                            />
                        </div>
                    ))}



                </div>






         



            <ScreenAlrt
                userCheck
                alertid={setTime}
                textName='Thank you, Your address has been updated...'

            />

        </div>
        <div className='postion-buttom'>
            <Row className='justify-content-center'>

                <Col xs={6} sm={6} md={6} lg={6}>

                    <ButtomClick title='Cancal' style={Styles.buttomColorPageCancal} onClick={(e) => setOpenAddres(false)} />


                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                    <ButtomClick
                        title='Save'
                        type='submit'
                        style={Styles.buttomColorPage}


                        disabled={
                            !validation(dataPost?.zipcode, 4) ||
                            !validation(dataPost?.city, 4) ||
                            !validation(dataPost?.homeNumber, 4) ||
                            !validation(dataPost?.addres, 4)

                        }
                    />
                </Col>

            </Row>
        </div>

    </Form>
}



export default MyAddress




