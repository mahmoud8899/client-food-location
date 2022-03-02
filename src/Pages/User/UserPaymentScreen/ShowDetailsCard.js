import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import EditComponent from '../../../Components/Update/EditComponent/EditComponent'
import { RemoveCardNumberAction } from '../../../redux/Action/Cart_Action'




export default function ShowDetailsCard(props) {
const {TheCartNumber , classNamePayment} = props

    const dispatch = useDispatch()

    const [openDown, setOpenDown] = useState(false)

    const NoRemove = () => {
        dispatch(RemoveCardNumberAction())
    }




    return <div className={classNamePayment ?  'add-selected-item addxpxp'  :'Edit-updateCart'   } >

        <div className='first-class-add-remove'>
            <ImageScreen
                ImageIcon={MyOderImage.visa}
                className='visa-image'
            />

            <span  className={classNamePayment ? 'dddddddd' : ''}>{TheCartNumber?.cartnumber}</span>
        </div>



        <EditComponent
            setOptionMore={setOpenDown}
            optionMore={openDown}
            OpenEditAddress
            ENoption
            NoRemove={NoRemove}
        />



    </div>
}