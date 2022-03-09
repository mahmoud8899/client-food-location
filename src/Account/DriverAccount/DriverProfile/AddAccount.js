import { Form, Modal } from 'react-bootstrap'
import Input from '../../../Components/Input/Input'
import ButtomClick from '../../../Components/Buttom/Buttom'
import Styles from '../../../Components/Update/StylesComponents/style'
import '../../RestaurantsAccount/style.css'
import { ValidationAccount } from '../../../Assistant/ValidationPayment'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import { ValtionMe } from '../../../Assistant/ValtionMe'
import { useState } from 'react'

const AddAccount = (props) => {

    const {
        openAddAccount,
        setOpenAddAccount
    } = props


    const [addAccountNumber, setAddAccountNumber] = useState({
        Accountnumber: '',
        Accountowner: '',
        IBAN: ''

    })




    const HandleAccount = (e) => {
        e.preventDefault()
        return console.log('click', addAccountNumber)
    }

    return <Modal show={openAddAccount} onHide={() => setOpenAddAccount(!openAddAccount)}>

        <div className='body-category'>
            <div className='modal-title-edit-category'>

                <h1>Add Account bank </h1>
                <ImageScreen
                    ImageIcon={MyOderImage.close}
                    className='close-pp-pp-image'
                    onClick={() => setOpenAddAccount(!openAddAccount)}
                />
            </div>



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
                    value={addAccountNumber.IBAN}
                    onChange={(e) => setAddAccountNumber({ ...addAccountNumber, IBAN: e.target.value })}
                    validation={ValtionMe(addAccountNumber.IBAN, 'isUser')?.toString()}
                />


                <div className='Buttom-class'>

                    <ButtomClick
                        title='Add Account'
                        style={Styles.TabButtomCreate}
                        onClick={(e) => HandleAccount(e)}
                        disabled={
                            ValidationAccount(addAccountNumber) !== true
                        }

                    />
                </div>

            </Form>



        </div>

    </Modal>


}

export default AddAccount

