import {  Form, Modal } from 'react-bootstrap'
import Input from '../../../Components/Input/Input'
import ButtomClick from '../../../Components/Buttom/Buttom'
import Styles from '../../RestaurantsAccount/style'
import '../../RestaurantsAccount/style.css'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import { MyOderImage } from '../../../Assistant/MyOrderImage'

const AddAccount = (props) => {

    const { openAddAccount, setOpenAddAccount } = props

    // const [dataPost, setDataPost] = useState([])

    return <Modal show={openAddAccount} onHide={() => setOpenAddAccount(!openAddAccount)}>

        <div className='body-category'>
            <div className='modal-title-edit-category'>

                <h1>   Add Account bank </h1>
                <ImageScreen
                    ImageIcon={MyOderImage.close}
                    className='close-pp-pp-image'
                    onClick={() => setOpenAddAccount(!openAddAccount)}
                />
            </div>



            <Form onSubmit={(e) => { }} className='form-class-category addaccount'  >


                <Input
                    title='Account number'
                    placeholder='Account number'
                    required
                    className='Input-type-style notLeftinput'
                // value={postCreate?.name}
                // onChange={(e) => setPostCreate({ ...postCreate, name: e.target.value })}
                />
                <Input
                    title='Account owner'
                    placeholder='Account owner'
                    required
                    className='Input-type-style notLeftinput'
                // value={postCreate?.name}
                // onChange={(e) => setPostCreate({ ...postCreate, name: e.target.value })}
                />

                <Input
                    title='IBAN'
                    placeholder='IBAN'
                    required
                    className='Input-type-style notLeftinput'
                // value={postCreate?.name}
                // onChange={(e) => setPostCreate({ ...postCreate, name: e.target.value })}
                />


                <div className='Buttom-class'>

                    <ButtomClick
                        title='Add Account'
                        style={Styles.stylebuttom}

                    />
                </div>

            </Form>



        </div>

    </Modal>


}

export default AddAccount

