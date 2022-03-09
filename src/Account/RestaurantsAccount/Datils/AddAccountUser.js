import { useEffect, useState } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import { ChangeCode, ValidationAccount, ValidationUpdatedAccount } from '../../../Assistant/ValidationPayment'
import { ValtionMe } from '../../../Assistant/ValtionMe'
import ButtomClick from '../../../Components/Buttom/Buttom'
import { CloseScreen, closeUpdateAccount } from '../../../Components/CloseScreen/CloseScreen'
import CodeError from '../../../Components/CodeError/CodeError'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import Input from '../../../Components/Input/Input'
import HandleLoadingPage from '../../../Components/Update/HandleLoadingPage/HandleLoadingPage'
import Styles from '../../../Components/Update/StylesComponents/style'
import { AddAcountBAction } from '../../../redux/Action/Auth_Action'






export default function AddAccountUser(props) {
    const { openAddAccount, setOpenAddAccount } = props



    const dispatch = useDispatch()
    // user info 
    const userLogin = useSelector((state) => state?.userLogin)
    const { userInfo, token, loading, error, updatedaccount } = userLogin
    // success updated User.... 
    const [updateSuccessFully, setUpdateSuccessFully] = useState(false)
    // handle error input
    const [handleError, setHandleError] = useState(false)
    // input change user add acount
    const [addAccountNumber, setAddAccountNumber] = useState({ Accountnumber: '', Accountowner: '', iban: '' })



    // updated user add account....
    useEffect(() => {

        if (userInfo?.accountB?.accountnumber) {

            return setAddAccountNumber({
                Accountnumber: userInfo?.accountB?.accountnumber ? userInfo?.accountB?.accountnumber : '',
                Accountowner: userInfo?.accountB?.accountnowner ? userInfo?.accountB?.accountnowner : '',
                iban: userInfo?.accountB?.iban ? userInfo?.accountB?.iban : '',
            })
        } else {
            setAddAccountNumber({ Accountnumber: '', Accountowner: '', iban: '' })
        }




    }, [userInfo?.accountB])



    // success after updated and create....
    useEffect(() => {

        if (updatedaccount) {
            return setUpdateSuccessFully(true)
        }


        return () => {
            setUpdateSuccessFully(false)
        }

    }, [updatedaccount,])




    // send data After Updated to Server......
    const HandleAccount = (e) => {

        e.preventDefault()
        setHandleError(false)
        if (addAccountNumber?.Accountnumber?.length >= Number(6)
            && addAccountNumber?.Accountowner?.length >= Number(6)
            && addAccountNumber?.iban?.length >= Number(6)
        ) {
            const SendData = {
                accountnumber: ChangeCode(addAccountNumber?.Accountnumber),
                accountnowner: ChangeCode(addAccountNumber?.Accountowner),
                iban: ChangeCode(addAccountNumber?.iban)
            }

            return dispatch(AddAcountBAction(SendData, token))
        }

        return setHandleError(true)
    }

    // close funation
    const HandleClose = () => {

        closeUpdateAccount(dispatch)
        setUpdateSuccessFully(false)
        setHandleError(false)

        return setOpenAddAccount(!openAddAccount)
    }

    // class remove error from user...
    const BackAndRemoveError = () => {

        setHandleError(false)
        setUpdateSuccessFully(false)
        return CloseScreen(dispatch)
    }




    return <Modal show={openAddAccount} onHide={HandleClose}>

        <HandleLoadingPage
            loading={loading}
            error={error}
            updateSuccessFully={updateSuccessFully}
            HandleClose={HandleClose}
            BackAndRemoveError={BackAndRemoveError}
            update={updatedaccount}

        >
            <div className='body-category'>

                <div className='modal-title-edit-category'>

                    <h1>Add Account bank </h1>
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




                <Form
                    onSubmit={HandleAccount}
                    className='form-class-category addaccount' >


                    <Input
                        title='Account number'
                        placeholder='Account number'
                        className='Input-type-style notLeftinput'
                        value={addAccountNumber.Accountnumber}
                        onChange={(e) => setAddAccountNumber({ ...addAccountNumber, Accountnumber: e.target.value })}
                        validation={ValtionMe(addAccountNumber?.Accountnumber, 'isUser')?.toString()}
                    />
                    <Input
                        title='Account owner'
                        placeholder='Account owner'
                        required
                        className='Input-type-style notLeftinput'
                        value={addAccountNumber.Accountowner}
                        onChange={(e) => setAddAccountNumber({ ...addAccountNumber, Accountowner: e.target.value })}
                        validation={ValtionMe(addAccountNumber.Accountowner, 'isUser')?.toString()}
                    />

                    <Input
                        title='IBAN'
                        placeholder='IBAN'
                        required
                        className='Input-type-style notLeftinput'
                        value={addAccountNumber.iban}
                        onChange={(e) => setAddAccountNumber({ ...addAccountNumber, iban: e.target.value })}
                        validation={ValtionMe(addAccountNumber.iban, 'isUser')?.toString()}
                    />


                    <div className='Buttom-class'>

                        <ButtomClick
                            title={
                                userInfo?.accountB?.accountnumber ?
                                    'uppdatering' : 'Lägg till konto'
                            }
                            style={Styles.TabButtomCreate}
                            onClick={(e) => HandleAccount(e)}
                            disabled={
                                userInfo?.accountB?.accountnumber ?

                                    ValidationUpdatedAccount(addAccountNumber, userInfo?.accountB)
                                    :
                                    ValidationAccount(addAccountNumber) !== true

                            }

                        />
                    </div>

                </Form>



            </div>
        </HandleLoadingPage>


    </Modal>
}