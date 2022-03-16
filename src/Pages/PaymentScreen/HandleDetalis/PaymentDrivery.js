import { useState } from 'react'
import { Image } from 'react-bootstrap'
import { DeliveryTakeaway } from '../../../Assistant/Selection'
import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen'
import { useDispatch } from 'react-redux'
import { AddDriverySelection } from '../../../redux/Action/Payment_action'
import { MyOderImage } from '../../../Assistant/MyOrderImage'



export default function PaymentDrivery(props) {

    const { driver, loading } = props


    const dispatch = useDispatch()

    const [clickOpenNav, setClickOpenNav] = useState(true)
    const HandelOpenDriver = (e) => {
        e.preventDefault()
        setClickOpenNav(!clickOpenNav)

        // setChangeDrivery(!changeDrivery)

    }
    const SaveSelection = (e, id) => {
        e.preventDefault()
        setClickOpenNav(!clickOpenNav)

        return dispatch(AddDriverySelection(id))


    }


    return <div className='FIrst-how add-padding-slider'>
        {loading ? <LoadingScreen /> :
            <div className='how-class color-family'>
               Hur ?
            </div>
        }

        {clickOpenNav ?

            <div className='drivery-class' onClick={(e) => HandelOpenDriver(e)} >

                <Image
                    src={driver?.image ? driver?.image : DeliveryTakeaway[0]?.image}
                    className='bike'
                />

                <div className='drivery-text'>
                    <span className='color-family'>{driver?.name ? driver?.name : DeliveryTakeaway[0]?.name}</span>
                    <span className='color-last-items' >{driver?.des ? driver?.des : DeliveryTakeaway[0]?.des}</span>
                </div>

                <div className='change-drivery' >
                    <span className='color-family add-color-all'>Change</span>
                </div>
            </div>
            :
            DeliveryTakeaway?.map((tak, Index) => (


                <div className='drivery-class' key={Index} onClick={(e) => SaveSelection(e, tak)} >


                    <Image
                        src={MyOderImage.checkedblack}
                        className='bike'
                    />
                   

                    <div className='drivery-text'>
                        <span className='color-family'>{tak?.name}</span>
                        <span className='color-last-items' >{tak?.des}</span>
                    </div>
                </div>
            ))

        }
    </div>
}