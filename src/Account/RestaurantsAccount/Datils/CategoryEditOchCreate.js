import { Form, Modal } from 'react-bootstrap'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import Input from '../../../Components/Input/Input'
import ButtomClick from '../../../Components/Buttom/Buttom'
import {ValidationCategory} from '../../../Assistant/ValidationPayment'
import { useEffect, useState } from 'react'
import Styles from '../style'
import '../style.css'


export default function CategoryEditOchCreate(props) {


    const valuecat = props?.editCategory?.object?.name




    const [categoryData, setCategoryData] = useState('')


    useEffect(() => {

        if (valuecat) {
            setCategoryData(valuecat)
        }


        return () => {
            setCategoryData('')
        }

    }, [categoryData, valuecat])



    // handle form
    const HandleForm = (e) => {
        e.preventDefault()

        console.log('click')
    }


    return <Modal
        show={props?.editCategory?.value}
        onHide={() => props?.setEditCategory({ value: false, object: '' })} >


        <div className='body-category'>
            <div className='modal-title-edit-category'>

                <h1>
                    {props?.editCategory?.object?.name ?
                        `Edit - ${props?.editCategory?.object?.name}` :
                        `create new Category`

                    }
                </h1>
                <ImageScreen
                    ImageIcon={MyOderImage.close}
                    className='close-pp-pp-image'
                    onClick={() => props?.setEditCategory({ value: false, object: '' })}
                />
            </div>


            <Form onSubmit={HandleForm} className='form-class-category'>
                <Input
                    placeholder='Category name.....'
                    value={categoryData}
                    onChange={(e) => setCategoryData(e.target.value)}
                    className='Input-type-style notLeftinput'


                />
                <ButtomClick
                    style={Styles.stylebuttom}
                    title='save'
                    onClick={HandleForm}
                />
            </Form>




        </div>




    </Modal>
}