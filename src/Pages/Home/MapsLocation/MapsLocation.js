import { useEffect, useState } from "react"
import mapStyles from "./mapStyles";
// import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow

} from "react-google-maps";



export default function MapsLocation(props) {

    const { className, coordinates } = props




    useEffect(() => {
        const listener = e => {
            if (e.key === "Escape") {
                setSelectedPark(null);
            }
        };
        window.addEventListener("keydown", listener);
    
        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, []);
    









    // show info 
    const [selectedPark, setSelectedPark] = useState(null);





    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
            defaultZoom={11}
            defaultCenter={{ lat: Number(coordinates[0]), lng: Number(coordinates[1]) }}
            defaultOptions={{
                styles: mapStyles,
                fullscreenControl: false,
                zoomControl: false

            }}
            onClick={(e)=> console.log(e.latLng.lat(),e.latLng.lng())}
        >
            < Marker
                position={{ lat: Number(coordinates[0]), lng: Number(coordinates[1]) }}
                icon={{
                    url: `/MyOrder/restaurant.png`,
                    scaledSize: new window.google.maps.Size(30, 30)
                }}
                onClick={() => {
                    setSelectedPark({
                        lat: Number(coordinates[0]),
                        lng: Number(coordinates[1])
                        , restaurant: 'Restaurangens adress',
                        me: 'hitta oss här'
                    });
                }}
            />






            {selectedPark && (<InfoWindow onCloseClick={() => {
                setSelectedPark(null);
            }}
                position={{
                    lat: Number(selectedPark.lat),
                    lng: Number(selectedPark.long),
                }}
            >
               <div className="InfoWindow-div">
                   <h1>{selectedPark?.restaurant}</h1>
                   <p>{selectedPark?.me}</p>
               </div>

            </InfoWindow>)
            }
        </GoogleMap>

    ));







    return <div className={className}>

            <MapWithAMarker
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAaiHP2Akwa5NPa_WNDy7rv_SRAL3PJy1U`}
                loadingElement={<div style={{ height: className }} />}
                containerElement={<div style={{ height: className }} />}
                mapElement={<div style={{ height: className }} />}
            />
        




    </div>
}

// {status &&
//     loading ?
//     <div className="loading">
//         <LoadingScreen />
//     </div>
//     :
//       {latMe !== null && lngMe !== null &&
//                 < Marker
//                     position={{ lat: latMe, lng: lngMe }}
//                     icon={{
//                         url: `/MyOrder/HomeAddress.png`,
//                         scaledSize: new window.google.maps.Size(30, 30)
//                     }}
//                     onClick={() => {
//                         setSelectedPark({
//                             lat: Number(latMe),
//                             lng: Number(lngMe),
//                             restaurant: 'mitt ställe',
//                             me: '😍'

//                         });
//                     }}
//                 />

//             } 
// const [latMe, setLatMe] = useState(null);
// const [lngMe, setLngMe] = useState(null);
// const [status, setStatus] = useState(null);
// const [loading, setLoading] = useState(false)

// useEffect(() => {


//     const Add = async () => {

//         try {
//             if (navigator.geolocation) {
//                 setStatus('Locating...');
//                 setLoading(true)
//                 navigator.geolocation.getCurrentPosition((position) => {
//                     setStatus(null);
//                     setLoading(false)
//                     setLatMe(position.coords.latitude);
//                     setLngMe(position.coords.longitude);
//                 }, () => {
//                     setStatus('Unable to retrieve your location');
//                 });
//             }
//         } catch (error) {
//             return setStatus('Geolocation is not supported by your browser');
//         }

//     }

//     Add()

//     return () => {
//         setStatus(null)
//         setLngMe(null)
//         setLatMe(null)
//         setLoading(false)

//     }
// }, [])






