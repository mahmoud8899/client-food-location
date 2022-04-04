import { Form } from 'react-bootstrap'
import React, { useState, Fragment } from "react";
import Styles from '../Update/StylesComponents/style';
import ButtomClick from '../Buttom/Buttom'
import SelectCityInput from './SelectCityInput'
import LoactionAddress from './LocationAddress'
import ShowMaps from './Maps'



export default function MyAddressLocation(props) {
    const {
        nextStep,
        setNextStep,
        oppenMpas,
        setOppenMaps
    } = props



    // navbar slider close and call back
    const [addAddress, setAddAddress] = useState({
        address: '',
        doornumber: '',
        city: '',
        zipcode: '',
        location: {
            lat: '',
            long: ''
        },
        work: ''
    })







    // handel add addresss.... >
    const HandleCity = (Event) => {
        Event.preventDefault()
        if (!nextStep) {

            return setNextStep(!nextStep)
        }

        if (oppenMpas) {
            setOppenMaps(!oppenMpas)
            return console.log('close Maps')
        }



        console.log('data....')



    }








    // SelectCityInput first input select city input 
    // 


    return <Fragment>
        <Form onSubmit={HandleCity}>
            {nextStep ?
                oppenMpas ?

                    <ShowMaps />

                    :
                    <LoactionAddress
                        nextStep={nextStep}
                        setNextStep={setNextStep}
                        oppenMpas={oppenMpas}
                        setOppenMaps={setOppenMaps}
                        addAddress={addAddress}
                        setAddAddress={setAddAddress}
                    />

                :

                <SelectCityInput
                    addAddress={addAddress}
                    setAddAddress={setAddAddress}
                />

            }




            <div className='buttom-close'>
                <ButtomClick
                    title={oppenMpas ? 'Fortsätt' : 'next'}
                    style={Styles.TabButtomCreate}
                    disabled={addAddress.city === 'value' || addAddress.city === ''}
                />
            </div>

        </Form>



    </Fragment>


}



//  <div className={nextStep ? 'Handl-navBar-only' : 'flexrow'}>
// {nextStep &&
//     <>
//         <HiArrowNarrowLeft className='close-pp-pp-image' onClick={(e) => CallBack(e)} />
//         <h1 className='font-edit'>Adressdetaljer</h1>
//     </>
// }

// <HiOutlineX className='close-pp-pp-image' />
// </div> 

