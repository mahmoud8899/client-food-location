import { useEffect, useState } from "react"
import mapStyles from "./mapStyles";
import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,

} from "react-google-maps";



export default function LocationUser(props) {

    const { className } = props


    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
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
                        setLng(position.coords.longitude);
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
            setLng(null)
            setLat(null)
            setLoading(false)
         
        }
    }, [])


    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{ lat: Number(lat), lng: Number(lng) }}
            defaultOptions={{
                styles: mapStyles,
                fullscreenControl: false,
                zoomControl: false

            }}
        >


            < Marker
                position={{ lat: Number(lat), lng: Number(lng) }}
                // icon={{
                //     url: `/MyOrder/bike.png`,
                //     scaledSize: new window.google.maps.Size(30, 30)
                // }}
            />


        </GoogleMap>

    ));







    return <div className={className}>
        {status &&
            loading ?
            <div className="loading">
                <LoadingScreen />
            </div>
            :
            <MapWithAMarker
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAaiHP2Akwa5NPa_WNDy7rv_SRAL3PJy1U`}
                loadingElement={<div style={{ height: `30rem` }} />}
                containerElement={<div style={{ height: `30rem` }} />}
                mapElement={<div style={{ height: `30rem` }} />}
            />
        }




    </div>
}







