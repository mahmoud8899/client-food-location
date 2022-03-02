import '../UserProfileScreen/Profile.css'
import { Form, Modal, Row, Col } from 'react-bootstrap'
import Input from '../../../Components/Input/Input'
import ButtomClick from '../../../Components/Buttom/Buttom'
import { useEffect, useState } from 'react'
import { ValtionMe } from '../../../Assistant/ValtionMe'
import {useDispatch} from 'react-redux'
import {AddTelefonNumber} from '../../../redux/Action/Auth_Action'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
export default function UserAddTelefonNumber(props) {

    const { openAddNumber, setOpenAddNumber ,successfully } = props

    const dispatch = useDispatch()


    const [telefonNumber, setTelefonNumber] = useState('')



    useEffect(()=>{

        if(successfully !== null)  return setOpenAddNumber(false)

        return ()=>{
            setOpenAddNumber(false)
        }

    },[successfully,setOpenAddNumber])


    const HandleAddNumber = (e) => {
        e.preventDefault()
 
        if (!ValtionMe(telefonNumber, 'isPhone')) return 

    
        return dispatch(AddTelefonNumber({
            telephone: telefonNumber
        }))
    }

    return openAddNumber && <Modal show={openAddNumber} onHide={() =>   setOpenAddNumber(!openAddNumber)}>

        <div className='add-padding-number'>
            <div className='add-padding-number-clos'>
            <ImageScreen  
            ImageIcon={MyOderImage.close}
             className='Login-Close-Image-rigth'
             onClick={()=> setOpenAddNumber(!openAddNumber)}
             />
            </div>
            <Row className='justify-content-center'>
                <Col xs={10} sm={10} md={8} lg={8}  >
                    <h1 className='text-align-center-h1'>add telefon number</h1>
                    <Form className='flex-class-center' >
                        <Input
                            placeholder='- - - - - - - - - -'
                            className='Type-Input-class'
                            onChange={(e) => setTelefonNumber(e.target.value)}
                            validation={ValtionMe(telefonNumber, 'isPhone').toString()}
                            value={telefonNumber}
                            type='number'
                            onKeyPress={(e) => e.key === 'key' ? HandleAddNumber(e) : null}
                        />

                    

                        <ButtomClick
                            title='Add Your telefon Number'
                            disabled={!ValtionMe(telefonNumber, 'isPhone')}
                            onClick={(e)=>HandleAddNumber(e)}
                           


                        />
                    </Form>
                </Col>
            </Row>


        </div>

    </Modal>
}