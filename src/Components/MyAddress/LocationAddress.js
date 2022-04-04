import { Fragment } from 'react';
import { BiClinic, BiMapAlt, BiPlus, BiStreetView } from 'react-icons/bi';
import { RiCheckFill } from 'react-icons/ri';
import ImageScreen from '../ImageScreen/ImageScreen';
import TheInputForm from '../TheInputForm/TheInputForm';
import { FaCity } from 'react-icons/fa'
import Styles from '../Update/StylesComponents/style';
import { addresSelection } from '../../Assistant/Selection';




export default function LoactionAddress(props) {
    const {
        nextStep,
        setNextStep,
        oppenMpas,
        setOppenMaps,
        addAddress,
        setAddAddress,
    } = props




    // city: '',
    // zipcode: '',
    // location: {
    //     lat: '',
    //     long: ''
    // },
    // work: ''


    const HandleCity = () => { }

    // validation.....
    const validation = (name, max = 10) => {

        return name?.length >= max && 'true'

    }


    return <Fragment>

        <div className='add-scroll-to change-top'>
            <div className='hitta-hitta'>
                <span className='classPluseTitel'>Skriv adressen exakt, så underlättar du för oss att leverera.</span>
            </div>

            <div>

                <span className='selection-name'>Gatuadress och byggnadsnummer</span>
                <TheInputForm
                    placeholder='Gatuadress och byggnadsnummer'
                    onChange={(e) => setAddAddress({ ...addAddress, address: e.target.value })}
                    type='text'
                    value={addAddress?.address}
                    name='address'
                    FirstIcons={
                        <Fragment>
                            <BiStreetView className='Icons-LEFT' />
                            {validation(addAddress?.address, 4)
                                ? <RiCheckFill className='Icons-LEFT-right' /> : null
                            }
                        </Fragment>
                    }
                    className='Input-type-style productdetials add-left-text'
                    onKeyPress={(e) => e.key === 'Enter' ?
                        validation(addAddress?.address, 4) ?
                            HandleCity(e) : null : null}
                />


                <span className='selection-name'>Detaljer (dörrnummer, lägenhet)</span>
                <TheInputForm
                    placeholder='Detaljer (dörrnummer, lägenhet)'
                    onChange={(e) => setAddAddress({ ...addAddress, doornumber: e.target.value })}
                    value={addAddress?.doornumber}
                    name='homeNumber'
                    FirstIcons={
                        <Fragment>
                            <BiClinic className='Icons-LEFT' />
                            {validation(addAddress?.doornumber, 1)
                                ? <RiCheckFill className='Icons-LEFT-right' /> : null
                            }
                        </Fragment>
                    }
                    className='Input-type-style productdetials add-left-text'
                    onKeyPress={(e) => e.key === 'Enter' ?
                        validation(addAddress?.doornumber, 1) ?
                            HandleCity(e) : null : null}
                />

                <div className='postion-city' onClick={() => setNextStep(!nextStep)}>
                    <FaCity className='Icons-LEFT' />
                    <span className='postion-city-children'>{addAddress?.city}</span>
                </div>

                <span className='selection-name'>Postnummer</span>
                <TheInputForm

                    type='text'
                    placeholder='Postnummer'
                    required
                    onChange={(e) => setAddAddress({ ...addAddress, zipcode: e.target.value })}
                    value={addAddress?.zipcode}
                    FirstIcons={
                        <Fragment>
                            <BiPlus className='Icons-LEFT' />
                            {validation(addAddress?.zipcode, 3)
                                ? <RiCheckFill className='Icons-LEFT-right' /> : null
                            }
                        </Fragment>
                    }
                    className='Input-type-style productdetials add-left-text'
                    onKeyPress={(e) => e.key === 'Enter' ?
                        validation(addAddress?.zipcode, 3) ?
                            HandleCity(e) : null : null}
                />




            </div>

            <h1 className='font-edit change-font'>Adressens plats</h1>

            <div className='hitta-hitta'>
                <span className='classPluseTitel'>
                    Om du anger din exakta plats på kartan hjälper du oss att hitta dig snabbt.
                </span>
            </div>



            <div className='maps-icons' onClick={() => setOppenMaps(!oppenMpas)}>
                <BiMapAlt className='placering' />
                <span>Ändra entréns placering på en karta</span>
            </div>



            <h1 className='font-edit change-font'>Typ av adress</h1>

            <div className='hitta-hitta'>
                <span className='classPluseTitel'>Genom att märka adresserna kan du lättare välja mellan dem. Välj "Annan" för att skapa en egen etikett.</span>
            </div>

            <div className='selectionHome'>
                {addresSelection?.map((wo, Index) => (
                    <div
                        className={addAddress?.work === wo?.name ? 'openSelection action' : 'openSelection'}
                        style={Styles.colorLine}
                        key={Index}
                        onClick={(e) => setAddAddress({ ...addAddress, work: wo?.name })}

                    >
                        <span>{wo?.name}</span>
                        <ImageScreen ImageIcon={wo?.image}
                            className='Image-selection'
                        />
                    </div>
                ))}



            </div>





        </div>
    </Fragment>
}