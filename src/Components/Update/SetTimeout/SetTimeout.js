import { useEffect, useState } from 'react'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import { TheTimeOppenProduct } from '../../../Assistant/TheTimeOppenProduct'
import ImageScreen from '../../ImageScreen/ImageScreen'





export default function SetTimeout(props) {


    // const [data, setData] = useState('')
    const [visaTime, seVisaTime] = useState(false)


    useEffect(() => {

        if (!visaTime) {
            const TheClearTime = setInterval(() => {
                // setData(new Date().toLocaleTimeString())
                seVisaTime(true)
            }, 7000);
            return () => {
                clearInterval(TheClearTime)
            }

        }
        

    }, [visaTime])





    return TheTimeOppenProduct(props?.cartinfo?.opentime)?.toString() === 'false' &&  visaTime === false  &&

        <div className='opentime-display'>

            <p> Restaurangen är för närvarande stängd. </p>
            <ImageScreen ImageIcon={MyOderImage.close} className='time-Close-image' />

        </div>


}