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
import CodeError from '../../../Components/CodeError/CodeError'



export default function CategoryEditOchCreate(props) {



    const { editCategory, setEditCategory, userInfo } = props


    const dispatch = useDispatch()
    // handle input error 
    const [handleError, setHandleError] = useState(false)
    // input category 
    const [categoryData, setCategoryData] = useState({ name: '', _id: '', cartinfo: userInfo?.cartinfo, user: '' })
    // event after reqqurest...
    const PageCategory = useSelector((state) => state?.PageCategory)
    const { updated, loading, error, create } = PageCategory

    // successfully singe page
    const [successFully, setSuccessFully] = useState(false)


    // updated input category Edit....
    useEffect(() => {

        if (editCategory?.object) {
            setCategoryData({
                name: editCategory?.object?.name ? editCategory?.object?.name : '',
                _id: editCategory?.object?._id ? editCategory?.object?._id : '',
                cartinfo: userInfo?.cartinfo ? userInfo?.cartinfo : '',
                user: userInfo?._id ? userInfo?._id : ''
            })
        }

        // open after successfully create and Update.
        if (updated || create) {
            return setSuccessFully(true)
        }


        return () => {
            setCategoryData({ name: '', _id: '', cartinfo: userInfo?.cartinfo, user: userInfo?._id })
            setSuccessFully(false)
        }

    }, [
        setCategoryData,
        editCategory,
        updated,
        create,
        successFully,
        userInfo
    ])




    // handle form
    const HandleForm = (e) => {
        e.preventDefault()
        setHandleError(false)

        if (categoryData?.name?.trim().length >= Number(3)) {





            const CodeColenar = {
                name: ChangeCode(categoryData?.name),
                _id: categoryData?._id,
                user: categoryData?.user,
                cartinfo: categoryData?.cartinfo,
            }
            if (editCategory?.object?.name) {

                return dispatch(UpdatedCategoryAction(CodeColenar))
            } else {
                return dispatch(CategoryCategoryAction(CodeColenar))
            }

        } else {


            return setHandleError(true)
        }


    }


    // close 
    const HandleClose = () => {

        setEditCategory({ value: false, object: '' })
        setSuccessFully(false)
        TheRemoveUpdated(dispatch)
        setHandleError(false)
        return
    }


    // remove error
    const BackAndRemoveError = () => {
        TheRemoveUpdated(dispatch)
        setHandleError(false)
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
                            `Uppdatering - ${editCategory?.object?.name}` :
                            `Skapa ny kategori`

                        }
                    </h1>
                    <ImageScreen
                        ImageIcon={MyOderImage.close}
                        className='close-pp-pp-image'
                        onClick={HandleClose}
                    />
                </div>


                {handleError &&
                    <div className='error-input-red' >
                        <CodeError error='Det är saker som är fel' />
                    </div>
                }


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