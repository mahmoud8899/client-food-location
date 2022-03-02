
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import { useState } from 'react'
import { Add_timeAction } from '../../../redux/Action/Cart_Action'
import { useDispatch, useSelector } from 'react-redux'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import OrderTimeScreen from '../../../Components/Update/OrderTimeScreen/OrderTimeScreen'
import { theTimeNow } from '../../../Assistant/Selection'


export default function PaymentDate() {



    const dispatch = useDispatch()

    const cart = useSelector((state) => state?.cart)
    const { timeBooking } = cart
    // cart info restrange... 
    const cartInfoid = useSelector((state) => state?.cartInfoid)
    const { cartinfo } = cartInfoid






    // console.log(timeBooking)

    // time 
    const [openchangeTime, setOpenchangeTime] = useState(false)
    // const [startDate, setStartDate] = useState(new Date())
    const HandleChangeDate = (e) => {
        dispatch(Add_timeAction({ timeOrder: null, dateOrder: null }))
        e.preventDefault()
        return setOpenchangeTime(!openchangeTime)

    }
















    const [timeOrder, setTimeOrder] = useState('')
    const [dateOrder, setDateOrder] = useState('')


    // fick data
    const userOptimtim = {
        oppen: cartinfo?.opentime?.oppen,
        close: cartinfo?.opentime?.close
    }




    const HandleClickALL = (e) => {
        e.preventDefault()
        if (timeOrder === '' ) {

            setTimeOrder(theTimeNow(userOptimtim)[0])
            dateOrder === '' && setDateOrder('today')
            return
         
        }

        const data = {
            timeOrder: timeOrder ? timeOrder : 'ok',
            dateOrder: dateOrder ? dateOrder : 'not'
        }
        dispatch(Add_timeAction(data))


        setTimeOrder('')
        setDateOrder('')



        return setOpenchangeTime(!openchangeTime)

    }


    return <div className='FIrst-how add-padding-slider'>

        <div className='how-class color-family'>
            when?
        </div>

        <div className='drivery-class' onClick={HandleChangeDate}>

            <ImageScreen
                ImageIcon={MyOderImage.timeblack}
                className='bike'
            />



            <div className='drivery-text'>
                <span className='color-family'>
                    {timeBooking?.dateOrder ? timeBooking?.dateOrder : 'as soon as possible'}
                    {timeBooking?.timeOrder && timeBooking?.timeOrder}

                </span>
                <span className='color-last-items '>
                    {timeBooking?.dateOrder ? null : `You'll Get Your Order In 35 To 45 Minutes`}

                </span>

            </div>
            {openchangeTime ? null :
                <div className='change-drivery' >
                    <span className='color-family add-color-all'>Change</span>
                </div>
            }


        </div>
        {openchangeTime ?
            <div className='add-xpxp'  >

                <div className='add-fix-add' onChange={(e) => HandleClickALL(e)}>
                    <ImageScreen ImageIcon={MyOderImage.checkedblack} className='bike' />
                    <div className='drivery-text'>
                        <span className='color-family'>
                            {dateOrder} {timeOrder}
                        </span>
                    </div>

                    <div className='change-drivery' onClick={(e) => HandleClickALL(e)}>
                        <span className='color-family add-color-all'>Done</span>
                    </div>
                </div>

                <OrderTimeScreen
                    setTimeOrder={setTimeOrder}
                    setDateOrder={setDateOrder}
                    timeOrder={timeOrder}
                    cartinfo={cartinfo}


                />

            </div>
            : null




        }




    </div >

}





// ref={scrollUseRef}
    // const scrollUseRef = useRef()
    // useEffect(() => {
    //     scrollUseRef.current?.scrollIntoView();
    //     scrollUseRef.current?.scrollIntoView(false);
    //     scrollUseRef.current?.scrollIntoView({ block: "end" });
    //     scrollUseRef.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    //     // eslint-disable-next-line
    // }, [openchangeTime])
    // const TheSaveing = (e) => {
    //     e.preventDefault()
    //     console.lo(e)
    //     console.log(timeOrder, dateOrder)
    //     // dispatch(Add_timeAction({ timeOrder, dateOrder }))
    //     return setOpenchangeTime(!openchangeTime)
    // }
