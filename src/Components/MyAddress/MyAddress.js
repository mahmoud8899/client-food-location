import { Row, Col, Form } from 'react-bootstrap'
import ButtomClick from '../Buttom/Buttom'
import Input from '../Input/Input'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { AddAdressUserAction } from '../../redux/Action/Auth_Action'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import { addresSelection } from '../../Assistant/Selection'
import ImageScreen from '../ImageScreen/ImageScreen'
import { ValidationUserAddress, ChangeCode } from '../../Assistant/ValidationPayment'
import Styles from '../Update/StylesComponents/style'
import '../../Pages/User/UserProfileScreen/Profile.css'
import CodeError from '../CodeError/CodeError'

const MyAddress = (props) => {
    const {
        ClassNamePayment,
        setOpenAddres,
        ClassPaymentAdd,
        setUpdateSuccessFully

    } = props


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


    // handle error 
    const [handleError, setHandleError] = useState(false)



    // handle send data user Address.
    const HandelChangeAddres = (e) => {
        e.preventDefault()
        setHandleError(false)

        if (dataPost?.homeNumber?.length >= Number(1)
            && dataPost?.addres?.length >= Number(4)
            && dataPost?.city?.length >= Number(3)
            && dataPost?.zipcode?.length >= Number(3)
            && dataPost?.work?.length >= Number(1)
        ) {

            setHandleError(false)
            const userAddrees = {
                addres: ChangeCode(dataPost?.addres),
                homeNumber: ChangeCode(dataPost?.homeNumber),
                city: ChangeCode(dataPost?.city),
                work: ChangeCode(dataPost?.work),
                zipcode: ChangeCode(dataPost?.zipcode),
                ClassAddAddress: true
            }

            dispatch(AddAdressUserAction(userAddrees))
            setUpdateSuccessFully(true)

            return

        } else {
            return setHandleError(true)


        }





    }







    // validation.....
    const validation = (name, max = 10) => {

        return name?.length >= max && 'true'

    }





    return <Form
        onSubmit={HandelChangeAddres}
        className={ClassNamePayment ? 'ClassNamePayment' : ClassPaymentAdd ? '' : 'POstion-form'}>

        {handleError &&
            <div className='error-input-red' >
                <CodeError error='Det är saker som är fel' />
            </div>
        }


        <div className={ClassNamePayment ? null : 'scroll-bottom-style'}>




            <Input
                title='Street address and building number'
                type='text'
                placeholder='Street address and building number'
                onChange={(e) => setPostData({ ...dataPost, addres: e.target.value })}
                value={dataPost?.addres}
                name='address'
                className='Input-type-style productdetials add-left-text'
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
                className='Input-type-style productdetials add-left-text'
                ImageLog={MyOderImage.number}
                validation={validation(dataPost?.homeNumber, 1)}
                onKeyPress={(e) => e.key === 'Enter' ? HandelChangeAddres(e) : null}
            />


            <Input
                title='stad'
                type='text'
                placeholder='stad'
                required
                onChange={(e) => setPostData({ ...dataPost, city: e.target.value })}
                value={dataPost.city}
                name='stad'
                className='Input-type-style productdetials add-left-text'
                ImageLog={MyOderImage.cityB}
                validation={validation(dataPost?.city, 3)}
                onKeyPress={(e) => e.key === 'Enter' ? HandelChangeAddres(e) : null}
            />






            <div className='MyPhone'>

                <span>+44{userInfo?.telephone}</span>
            </div>

            <Input
                title='Postnummer'
                type='text'
                placeholder='Postnummer'
                required
                onChange={(e) => setPostData({ ...dataPost, zipcode: e.target.value })}
                value={dataPost?.zipcode}
                name='Postnummer'
                className='Input-type-style productdetials add-left-text'
                ImageLog={MyOderImage.zip}
                validation={validation(dataPost?.zipcode, 3)}
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
                        <ImageScreen ImageIcon={wo?.image}
                            className='Image-selection'
                        />
                    </div>
                ))}



            </div>












        </div>

        <div className='postion-buttom'>
            <Row className='justify-content-center'>

                <Col xs={6} sm={6} md={6} lg={6}>

                    <ButtomClick
                        title='Cancal'
                        style={Styles.buttomColorPageCancal}
                        onClick={(e) => setOpenAddres(false)} />


                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                    <ButtomClick
                        title='Save'
                        type='submit'
                        style={Styles.buttomColorPage}


                        disabled={
                            userInfo?.Adress?.addres ?
                                ValidationUserAddress(dataPost, userInfo?.Adress)
                                :
                                !validation(dataPost?.zipcode, 3) ||
                                !validation(dataPost?.city, 3) ||
                                !validation(dataPost?.homeNumber, 1) ||
                                !validation(dataPost?.addres, 4) ||
                                !validation(dataPost?.work, 1)

                        }
                    />
                </Col>

            </Row>
        </div>

    </Form>



}



export default MyAddress








