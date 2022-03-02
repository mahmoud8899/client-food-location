import '../Home.css'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import { FirstNameRest } from '../../../Assistant/Selection'
import { useHistory } from 'react-router-dom'
export default function LoginDriverScreen() {




    const history = useHistory()
    




    return  <div className='driver-box-screen'>

        <div className='font-size-driver'>
            become a courier
        </div>

        <ImageScreen ImageIcon={MyOderImage.logindriver} className='logindriver' />


        <div className='item-screen-driver-apply'>
            <div className=''>
                <div className='item-screen-driver-apply-text'>
                    Start earning money
                </div>

                <div className='item-screen-driver-apply-text'>
                    as a {FirstNameRest} courier
                </div>


            </div>
            <div className='Buttom-driver' onClick={() => history.push(`/sw/${FirstNameRest}/driver/`)}>
                apply now
            </div>
        </div>

    </div>



}