import { useEffect, useState } from "react"
import { createContext } from 'react'
import { Modal } from "react-bootstrap";
import { Stand } from "../../Assistant/Selection";
import { LocationUserAction, RemoveLocationUserAction } from "../../redux/Action/LoactionUserAction";
import { useDispatch, useSelector } from 'react-redux'

export const UserLoaction = createContext()

export default function LocationPage({ children }) {



    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false)
    const [openSelectCity, setOpenSelectCity] = useState(false)
    const dispatch = useDispatch()






    // locat save location user... some select 
    const locationIndex = useSelector((state) => state?.locationIndex?.locationUser)








    // find location to user
    useEffect(() => {

        if (navigator.geolocation) {
            setStatus('Locating...');
            setLoading(true)
            navigator.geolocation.getCurrentPosition((position) => {
                dispatch(RemoveLocationUserAction())
                setStatus(null);
                setLoading(false)

                setLat(position.coords.latitude);
                return setLong(position.coords.longitude);
            }, () => {

                if (locationIndex?.name) {
                    setLat(locationIndex.lat)
                    setLong(locationIndex.long)
                    setLoading(false)
                    return
                }

                setLoading(true)
                setStatus('Unable to retrieve your location');
                return setOpenSelectCity(true)

            });

        }




        return () => {
            setStatus(null)
            setLong(null)
            setLat(null)
            setLoading(false)

        }
    }, [dispatch, locationIndex])




    // add city if not location to user...
    const HandleAddCityLocation = (data) => {


        dispatch(LocationUserAction(data))
        setLat(data.lat)
        setLong(data.long)
        setOpenSelectCity(false)
        setLoading(false)
        setStatus(null)
        return


    }

    // close 
    const handleClose = () => {

        return console.log('close....')
    }

    return <UserLoaction.Provider value={{
        lat,
        long,
        status,
        loading,
    }}>
        {openSelectCity ?
            <Modal show={openSelectCity} onHide={handleClose}>

                <div className='Add-Scroll-Home'>
                    <div className='top-margin-'>
                        <span>
                            City view används för att du
                            snabbt ska få en överblick.
                            För att enbart se restauranger
                            som levererar till dig

                        </span>

                        {Stand?.map((city, Index) => (
                            <div className='stad-div' key={Index} onClick={(e) => HandleAddCityLocation(city)}>
                                <div className='classPluseTitel notleft'>{city.name}</div>
                                <div className='classPluseTitel notleft' >10 km</div>
                            </div>
                        ))}


                    </div>
                </div>


            </Modal>
            :
            children
        }

    </UserLoaction.Provider>

}







// if (window.location.pathname.length > Number(2)) {
// }