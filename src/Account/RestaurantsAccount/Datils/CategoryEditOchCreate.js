import { Form, Modal } from 'react-bootstrap'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import Input from '../../../Components/Input/Input'
import ButtomClick from '../../../Components/Buttom/Buttom'
import { ChangeCode, ValidationCategory } from '../../../Assistant/ValidationPayment'
import { useEffect, useState } from 'react'
import { ValtionMe } from '../../../Assistant/ValtionMe'
import { useSelector, useDispatch } from 'react-redux'
import { UpdatedCategoryAction, CategoryCategoryAction } from '../../../redux/Action/Category_Action'
import { TheRemoveUpdated } from '../../../Components/CloseScreen/CloseScreen'
import HandleLoadingPage from '../../../Components/Update/HandleLoadingPage/HandleLoadingPage'
import Styles from '../../../Components/Update/StylesComponents/style'
import '../style.css'



export default function CategoryEditOchCreate(props) {



    const { editCategory, setEditCategory } = props
    const [categoryData, setCategoryData] = useState({ name: '', _id: '', cartinfo: '620d1f1084f54514ebb4dac8' })

    const dispatch = useDispatch()

    // event after reqqurest...
    const PageCategory = useSelector((state) => state?.PageCategory)
    const { updated, loading, error, create } = PageCategory

    const [successFully, setSuccessFully] = useState(false)


    useEffect(() => {

        if (editCategory?.object) {
            setCategoryData({
                name: editCategory?.object?.name ? editCategory?.object?.name : '',
                _id: editCategory?.object?._id ? editCategory?.object?._id : '',
                cartinfo: editCategory?.object?.cartinfo ? editCategory?.object?.cartinfo : '620d1f1084f54514ebb4dac8'
            })
        }

        if (updated || create) {

            
            return setSuccessFully(true)


        }


        return () => {
            setCategoryData({ name: '', _id: '', cartinfo: '620d1f1084f54514ebb4dac8' })
            setSuccessFully(false)
        }

    }, [
        setCategoryData,
        editCategory,
        updated,
        create,
        successFully
    ])




    // handle form
    const HandleForm = (e) => {
        e.preventDefault()

        const CodeColenar = {
            name: ChangeCode(categoryData?.name),
            _id: ChangeCode(categoryData?._id),
            cartinfo: ChangeCode(categoryData?.cartinfo),
        }

        if (editCategory?.object?.name) {

            return dispatch(UpdatedCategoryAction(CodeColenar))
        }


        return dispatch(CategoryCategoryAction(CodeColenar))
    }


    // close 
    const HandleClose = () => {

        setEditCategory({ value: false, object: '' })
        setSuccessFully(false)
        TheRemoveUpdated(dispatch)
        return
    }


    // remove error
    const BackAndRemoveError = () => {
        TheRemoveUpdated(dispatch)
        return
    }


    return <Modal
        show={editCategory?.value}
        onHide={HandleClose} >


        <HandleLoadingPage
            loading={loading}
            error={error}
            updateSuccessFully={successFully}
            HandleClose={HandleClose}
            BackAndRemoveError={BackAndRemoveError}
            updated={updated}
        >
            <div className='body-category'>
                <div className='modal-title-edit-category'>

                    <h1>
                        {editCategory?.object?.name ?
                            `Edit - ${editCategory?.object?.name}` :
                            `create new Category`

                        }
                    </h1>
                    <ImageScreen
                        ImageIcon={MyOderImage.close}
                        className='close-pp-pp-image'
                        onClick={() => setEditCategory({ value: false, object: '' })}
                    />
                </div>


                <Form onSubmit={HandleForm} className='form-class-category'>
                    <Input
                        placeholder='Category name.....'
                        onChange={(e) => setCategoryData({ ...categoryData, name: e.target.value })}
                        value={categoryData?.name}
                        className='Input-type-style notLeftinput'
                        validation={ValtionMe(categoryData?.name, 'inputname')?.toString()}



                    />
                    <div className='class-Margin-buttom'>
                        <ButtomClick
                            style={Styles.TabButtomCreate}
                            title={
                                editCategory?.object?.name ?
                                    'ändring'
                                    : 'skapa ny kategori'
                            }
                            onClick={HandleForm}
                            disabled={
                                editCategory?.object?.name ?
                                    ValidationCategory(categoryData?.name, editCategory?.object?.name) === true :
                                    !ValtionMe(categoryData?.name, 'inputname')

                            }
                        />
                    </div>
                </Form>




            </div>


        </HandleLoadingPage>















    </Modal>
}