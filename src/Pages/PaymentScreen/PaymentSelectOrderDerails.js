import {Modal } from 'react-bootstrap'
import ButtomClick from '../../Components/Buttom/Buttom'
import PaymentDrivery from './HandleDetalis/PaymentDrivery'
import PaymentDetailsAddres from './HandleDetalis/PaymentDetailsAddres'
import PaymentDate from './HandleDetalis/PaymentDate'
import Styles from '../../Components/Update/StylesComponents/style'
import { HiOutlineX  } from 'react-icons/hi'
export default function PaymentSelectOrderDerails(props) {


    const {
        openNavBarList,
        setOpenNavBarList,
        driver,
        loading,
        userInfo
    } = props








    const handleClose = () => setOpenNavBarList(false)






    return <Modal 
        show={openNavBarList} 
        onHide={handleClose}
       
        >

            <div className='sdfsdfds' id="myDIV">


            <div className='box-alert'>

                <div >
                    <span></span>
                </div>

                <div className='title-add'>
                    <span className='title-add-profile'>Select order details</span>
                </div>

                
                <HiOutlineX  className='close-pp-pp-image'   onClick={(e) => setOpenNavBarList(false)}/>

            </div>


            <div className='add-scroll-to'>
                <PaymentDrivery driver={driver} loading={loading} />
                <PaymentDetailsAddres
                    userInfo={userInfo}
                    driver={driver}
                />

                <PaymentDate />

            </div>

            <div className='class-buttom-postion'>
                <div className='class-buttom-postion-children'>
                    <ButtomClick
                     title='Done'
                      style={Styles.buttomColorPage}
                      onClick={(e) => setOpenNavBarList(false)}
                      />
                </div>
            </div>





            </div>

        </Modal>

  


}