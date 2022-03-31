import { useEffect, useState } from "react"
import { createContext } from 'react'


export const UserLoaction = createContext()

export default function LocationPage({ children }) {



    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false)



    useEffect(() => {


        const Add = async () => {

            try {
                if (navigator.geolocation) {
                    setStatus('Locating...');
                    setLoading(true)
                    navigator.geolocation.getCurrentPosition((position) => {
                        setStatus(null);
                        setLoading(false)
                        setLat(position.coords.latitude);
                        setLong(position.coords.longitude);
                    }, () => {
                        setStatus('Unable to retrieve your location');
                    });
                }
            } catch (error) {
                return setStatus('Geolocation is not supported by your browser');
            }

        }

        Add()

        return () => {
            setStatus(null)
            setLong(null)
            setLat(null)
            setLoading(false)

        }
    }, [])


    // console.log('App',lat,
    // long)


    return <UserLoaction.Provider value={{
        lat,
        long,
        status,
        loading,
    }}>
        {children}
    </UserLoaction.Provider>

}







