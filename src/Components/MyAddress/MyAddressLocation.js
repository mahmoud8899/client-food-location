import { Modal, Form } from 'react-bootstrap'
import React, { useState, Fragment } from "react";
import { HiArrowNarrowLeft, HiOutlineX } from 'react-icons/hi';
import Styles from '../Update/StylesComponents/style';
import ButtomClick from '../Buttom/Buttom'
import FirstPage from './FirstPage'
import LoactionAddress from './LocationAddress'
import ShowMaps from './Maps'



export default function MyAddressLocation() {




    // name city..... 
    const [query, setQuery] = useState('')
    // navbar slider close and call back
    const [nextStep, setNextStep] = useState(false)
    const [dataPost, setPostData] = useState({ work: '' })
    const [oppenMpas, setOppenMaps] = useState(false)




    // handel city
    const HandleCity = (Event) => {
        Event.preventDefault()
        setNextStep(!nextStep)
    }



    // close and call back
    const CallBack = (e) => {

        if (oppenMpas) {
            return setOppenMaps(!oppenMpas)
        }
        setNextStep(!nextStep)

    }




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
                        dataPost={dataPost}
                        setPostData={setPostData}
                    />

                :

                <FirstPage
                    query={query}
                    setQuery={setQuery}
                />

            }




            <div className='buttom-close'>
                <ButtomClick
                    title={oppenMpas ? 'Fortsätt' : 'next'}
                    style={Styles.TabButtomCreate}
                    disabled={query === 'value' || query === ''}
                />
            </div>

        </Form>



    </Fragment>


}



{/* <div className={nextStep ? 'Handl-navBar-only' : 'flexrow'}>
{nextStep &&
    <>
        <HiArrowNarrowLeft className='close-pp-pp-image' onClick={(e) => CallBack(e)} />
        <h1 className='font-edit'>Adressdetaljer</h1>
    </>
}

<HiOutlineX className='close-pp-pp-image' />
</div> */}

