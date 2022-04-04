// import { Container, Row, Col, Modal, Form } from 'react-bootstrap'
// import { BiMapAlt } from "react-icons/bi";
// import React, { useState, Fragment } from "react";
// import { withGoogleMap, withScriptjs, GoogleMap, Marker } from "react-google-maps";
// import TheInputForm from './Components/TheInputForm/TheInputForm';
// import { HiArrowNarrowLeft, HiOutlineX } from 'react-icons/hi';
// import { BsCursor } from 'react-icons/bs';
// import SearchingCity from './Pages/Home/LoactionScreen/SearchingCity';
// import { addresSelection, Stand } from './Assistant/Selection';
// import ButtomClick from './Components/Buttom/Buttom'
// import Styles from './Components/Update/StylesComponents/style';
// import ImageScreen from './Components/ImageScreen/ImageScreen';
// import { ValidationUserAddress, ChangeCode } from './Assistant/ValidationPayment'
// import CodeError from './Components/CodeError/CodeError'
// import { RiCheckFill } from 'react-icons/ri'
// import { FaCity } from 'react-icons/fa'
// import { BiClinic, BiPlus, BiStreetView } from 'react-icons/bi'
// import { ErrorTextInput } from './Assistant/TextError'
// import mapStyles from './Pages/Home/MapsLocation/mapStyles'
// import './style.css'



// function Map() {


//     const [lat, setLat] = useState(59.858131)
//     const [lng, setLng] = useState(17.644621)


//     const Mahfdsf = (e) => {

//         // console.log(e.latLng.lat())
//         setLat(e.latLng.lat())
//         setLng(e.latLng.lng())

//     }


//     return <GoogleMap
//         defaultZoom={10}
//         defaultCenter={{ lat: lat, lng: lng }}
//         onClick={(e) => Mahfdsf(e)}
//         defaultOptions={{
//             styles: mapStyles,
//             fullscreenControl: false,
//             zoomControl: false

//         }}
//     >
//         <Marker

//             position={
//                 { lat: lat, lng: lng }
//             }


//         />



//     </GoogleMap>
// }



// const MapWrapped = withScriptjs(withGoogleMap(Map));



// export default function MAPSTESTING() {




//     // filter 
//     const [query, setQuery] = useState('')


//     const [show, setShow] = useState(true)
//     const [nextStep, setNextStep] = useState(false)
//     const [dataPost, setPostData] = useState({ work: '' })
//     const [oppenMpas, setOppenMaps] = useState(false)

//     const handleClose = () => { }


//     // handel city
//     const HandleCity = (Event) => {
//         Event.preventDefault()
//         setNextStep(!nextStep)
//     }

//     // validation.....
//     const validation = (name, max = 10) => {

//         return name?.length >= max && 'true'

//     }


//     // close and call back
//     const CallBack = (e) => {

//         if (oppenMpas) {
//             return setOppenMaps(!oppenMpas)
//         }
//         setNextStep(!nextStep)

//     }
//     return <Container>

//         <Row className='justify-content-center'>
//             <Col xs={6} sm={6} md={6} lg={6}>
//                 <Modal show={show} onHide={handleClose}>


//                     <div className={nextStep ? 'Handl-navBar-only' : 'flexrow'}>
//                         {nextStep &&
//                             <>
//                                 <HiArrowNarrowLeft className='close-pp-pp-image' onClick={(e) => CallBack(e)} />
//                                 <h1 className='font-edit'>Adressdetaljer</h1>
//                             </>
//                         }

//                         <HiOutlineX className='close-pp-pp-image' />
//                     </div>





//                     <Form onSubmit={HandleCity}>
//                         {nextStep ?
//                             oppenMpas ?
//                                 <div>
//                                     <div style={{ width: "100%", height: "100vh" }}>
//                                         <MapWrapped
//                                             googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAaiHP2Akwa5NPa_WNDy7rv_SRAL3PJy1U`}
//                                             loadingElement={<div style={{ height: `100%` }} />}
//                                             containerElement={<div style={{ height: `100%` }} />}
//                                             mapElement={<div style={{ height: `100%` }} />}
//                                         />

//                                     </div>
//                                     <div className='buttom-close alrt-buttom'>
                              
//                                       <div className='class-maps'>
//                                       <span>😍</span>
//                                           <div className='class-maps-children'>
//                                           <span>
//                                             Stämmer det?
//                                         </span>
//                                         <span>Finjustera nålen tills du är klar och tryck sedan på fortsätt.</span>
                                     
//                                           </div>
                                        
//                                       </div>
                               
//                                     </div>
//                                 </div>
//                                 :
//                                 <Fragment>

//                                     <div className='add-scroll-to change-top'>
//                                         <div className='hitta-hitta'>
//                                             <span className='classPluseTitel'>Skriv adressen exakt, så underlättar du för oss att leverera.</span>
//                                         </div>

//                                         <div>

//                                             <span className='selection-name'>Street address and building number</span>
//                                             <TheInputForm
//                                                 placeholder='Street address and building number'
//                                                 onChange={(e) => setPostData({ ...dataPost, addres: e.target.value })}
//                                                 type='text'
//                                                 value={dataPost?.addres}
//                                                 name='address'
//                                                 FirstIcons={
//                                                     <Fragment>
//                                                         <BiStreetView className='Icons-LEFT' />
//                                                         {validation(dataPost?.addres, 4)
//                                                             ? <RiCheckFill className='Icons-LEFT-right' /> : null
//                                                         }
//                                                     </Fragment>
//                                                 }
//                                                 className='Input-type-style productdetials add-left-text'
//                                                 onKeyPress={(e) => e.key === 'Enter' ?
//                                                     validation(dataPost?.addres, 4) ?
//                                                         HandleCity(e) : null : null}
//                                             />


//                                             <span className='selection-name'>Details (door number, apartment)</span>
//                                             <TheInputForm
//                                                 placeholder='Details (door number, apartment)'
//                                                 onChange={(e) => setPostData({ ...dataPost, homeNumber: e.target.value })}
//                                                 value={dataPost?.homeNumber}
//                                                 name='homeNumber'
//                                                 FirstIcons={
//                                                     <Fragment>
//                                                         <BiClinic className='Icons-LEFT' />
//                                                         {validation(dataPost?.homeNumber, 1)
//                                                             ? <RiCheckFill className='Icons-LEFT-right' /> : null
//                                                         }
//                                                     </Fragment>
//                                                 }
//                                                 className='Input-type-style productdetials add-left-text'
//                                                 onKeyPress={(e) => e.key === 'Enter' ?
//                                                     validation(dataPost?.homeNumber, 1) ?
//                                                         HandleCity(e) : null : null}
//                                             />

//                                             <div className='postion-city' onClick={() => setNextStep(!nextStep)}>
//                                                 <FaCity className='Icons-LEFT' />
//                                                 <span className='postion-city-children'>Uppsala</span>
//                                             </div>

//                                             <span className='selection-name'>Postnummer</span>
//                                             <TheInputForm

//                                                 type='text'
//                                                 placeholder='Postnummer'
//                                                 required
//                                                 onChange={(e) => setPostData({ ...dataPost, zipcode: e.target.value })}
//                                                 value={dataPost?.zipcode}
//                                                 FirstIcons={
//                                                     <Fragment>
//                                                         <BiPlus className='Icons-LEFT' />
//                                                         {validation(dataPost?.zipcode, 3)
//                                                             ? <RiCheckFill className='Icons-LEFT-right' /> : null
//                                                         }
//                                                     </Fragment>
//                                                 }
//                                                 className='Input-type-style productdetials add-left-text'
//                                                 onKeyPress={(e) => e.key === 'Enter' ?
//                                                     validation(dataPost?.zipcode, 3) ?
//                                                         HandleCity(e) : null : null}
//                                             />




//                                         </div>

//                                         <h1 className='font-edit change-font'>Adressens plats</h1>

//                                         <div className='hitta-hitta'>
//                                             <span className='classPluseTitel'>
//                                                 Om du anger din exakta plats på kartan hjälper du oss att hitta dig snabbt.
//                                             </span>
//                                         </div>



//                                         <div className='maps-icons' onClick={() => setOppenMaps(!oppenMpas)}>
//                                             <BiMapAlt className='placering' />
//                                             <span>Ändra entréns placering på en karta</span>
//                                         </div>



//                                         <h1 className='font-edit change-font'>Typ av adress</h1>

//                                         <div className='hitta-hitta'>
//                                             <span className='classPluseTitel'>Genom att märka adresserna kan du lättare välja mellan dem. Välj "Annan" för att skapa en egen etikett.</span>
//                                         </div>

//                                         <div className='selectionHome'>
//                                             {addresSelection?.map((wo, Index) => (
//                                                 <div
//                                                     className={dataPost?.work === wo?.name ? 'openSelection action' : 'openSelection'}
//                                                     style={Styles.colorLine}
//                                                     key={Index}
//                                                     onClick={(e) => setPostData({ ...dataPost, work: wo?.name })}

//                                                 >
//                                                     <span>{wo?.name}</span>
//                                                     <ImageScreen ImageIcon={wo?.image}
//                                                         className='Image-selection'
//                                                     />
//                                                 </div>
//                                             ))}



//                                         </div>





//                                     </div>
//                                 </Fragment>

//                             :
//                             <div className='first-lagg'>
//                                 <h1 className='font-edit'>Lägg till ny adress</h1>

//                                 <div className='hitta-hitta'>
//                                     <span className='classPluseTitel'>Skriv din adress för att hitta restauranger och affärer i ditt område.</span>
//                                 </div>

//                                 <span className='selection-name bottom-select'>Välj stad</span>
//                                 <Form.Control
//                                     as='select'
//                                     style={Styles.input_selector_user}
//                                     onChange={(e) => setQuery(e.target.value)}
//                                     value={query}
//                                 >
//                                     <option>value</option>
//                                     {Stand?.map((city, Index) => (
//                                         <option
//                                             value={city.name}
//                                             key={Index}>
//                                             {city.name}
//                                         </option>
//                                     ))}
//                                 </Form.Control>
//                             </div>
//                         }




//                         <div className='buttom-close'>
//                             <ButtomClick
//                                 title={oppenMpas ? 'Fortsätt' : 'next'}
//                                 style={Styles.TabButtomCreate}
//                                 disabled={query === 'value' || query === ''}
//                             />
//                         </div>

//                     </Form>



//                 </Modal>
//             </Col>
//         </Row>

//     </Container>
// }



// // <TheInputForm
// // placeholder='Hitta din stad'
// // onChange={(e) => setQuery(e.target.value.trim().toLowerCase())}
// // value={query}
// // FirstIcons={
// //     <Fragment>
// //         <BiMap className='Icons-LEFT' />
// //         {query.length > Number(0) && <HiOutlineX
// //             className='close-pp-pp-image ADD-REMOVE'
// //             onClick={removeCity}
// //         />
// //         }
// //     </Fragment>
// // }
// // className='Input-type-style productdetials add-left-text'
// // />

// // <div className='selection-name'>food type</div>
// // {!selectCity && query.length > Number(0) &&
// //     <div className='resultSearchingcity'>

// //         <div className='flex-ddd changecolor'>
// //         </div>
// //         <div className='nuvarande'>
// //             <BsCursor />
// //             <span>Använd min nuvarande plats</span>
// //         </div>

// //         <SearchingCity
// //             Stand={search(Stand)}
// //             setQuery={setQuery}
// //             setSelectCity={setSelectCity}

// //         />



// //     </div>
// // }