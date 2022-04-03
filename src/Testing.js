import { Container, Row, Col, Modal, Form } from 'react-bootstrap'
import { BiMap, BiMapAlt } from "react-icons/bi";
import './style.css'
import React, { useState, useEffect, Fragment } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
} from "react-google-maps";
import TheInputForm from './Components/TheInputForm/TheInputForm';
import { HiOutlineX } from 'react-icons/hi';
import { BsCursor } from 'react-icons/bs';
import SearchingCity from './Pages/Home/LoactionScreen/SearchingCity';
import { Stand } from './Assistant/Selection';
import ButtomClick from './Components/Buttom/Buttom'
import Styles from './Components/Update/StylesComponents/style';



function Map() {


    const [lat, setLat] = useState(59.858131)
    const [lng, setLng] = useState(17.644621)


    const Mahfdsf = (e) => {

        // console.log(e.latLng.lat())
        setLat(e.latLng.lat())
        setLng(e.latLng.lng())

    }


    return <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: lat, lng: lng }}
        onClick={(e) => Mahfdsf(e)}
    >
        <Marker

            position={
                { lat: lat, lng: lng }
            }


        />



    </GoogleMap>
}



const MapWrapped = withScriptjs(withGoogleMap(Map));



export default function MAPSTESTING() {




    // filter 
    const [query, setQuery] = useState('')
    // console.log(query)
    const keys = ["name"];
    const search = (data) => {
        return data?.filter((item) =>
            keys?.some((key) => item[key]?.toLowerCase()?.includes(query))
        );
    };

    const [show, setShow] = useState(true)
    const [selectCity, setSelectCity] = useState(false)

    const handleClose = () => { }


    // handel city
    const HandleCity = () => { }

    const removeCity = () => {
        setSelectCity(false)
        setQuery('')
    }

    return <Container>

        <Row className='justify-content-center'>
            <Col xs={6} sm={6} md={6} lg={6}>
                <Modal show={show} onHide={handleClose}>
                    <div className='body-category'>

                        <div className='margin-left'>
                            <HiOutlineX className='close-pp-pp-image' />
                        </div>

                        <h1 className='font-edit'>Lägg till ny adress</h1>

                        <div className='hitta-hitta'>
                            <span className='classPluseTitel'>Skriv din adress för att hitta restauranger och affärer i ditt område.</span>
                        </div>



                        <Form onSubmit={HandleCity}>

                            <span className='selection-name'>Stad</span>
                            <div className='postin-city'>
                                <TheInputForm
                                    placeholder='Hitta din stad'
                                    onChange={(e) => setQuery(e.target.value.trim().toLowerCase())}
                                    value={query}
                                    FirstIcons={
                                        <Fragment>
                                            <BiMap className='Icons-LEFT' />
                                            {query.length > Number(0) && <HiOutlineX
                                                className='close-pp-pp-image ADD-REMOVE'
                                                onClick={removeCity}
                                            />
                                            }
                                        </Fragment>
                                    }
                                    className='Input-type-style productdetials add-left-text'
                                />


                                {!selectCity && query.length > Number(0) &&
                                    <div className='resultSearchingcity'>

                                        <div className='flex-ddd changecolor'>
                                        </div>
                                        <div className='nuvarande'>
                                            <BsCursor />
                                            <span>Använd min nuvarande plats</span>
                                        </div>

                                        <SearchingCity
                                            Stand={search(Stand)}
                                            setQuery={setQuery}
                                            setSelectCity={setSelectCity}

                                        />



                                    </div>
                                }

                            </div>


                            <div className='buttom-close'>
                                <ButtomClick
                                    title='next'
                                    style={Styles.TabButtomCreate}
                                    disabled={!selectCity}
                                />
                            </div>

                        </Form>


                    </div>
                </Modal>
                <div>











                    <h1>Adressens plats</h1>
                    <span>
                        Om du anger din exakta plats på kartan hjälper du oss att hitta dig snabbt.
                    </span>

                    <div className='maps-icons'>
                        <BiMapAlt className='placering' />
                        <h1>Ändra entréns placering på en karta</h1>
                    </div>


                    <div style={{ width: "100%", height: "200px" }}>
                        <MapWrapped
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAaiHP2Akwa5NPa_WNDy7rv_SRAL3PJy1U`}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `100%` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </div>


                </div>

            </Col>
        </Row>

    </Container>
}


