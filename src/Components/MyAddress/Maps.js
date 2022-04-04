import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps'
import mapStyles from '../../Pages/Home/MapsLocation/mapStyles'
import {useState,} from 'react'
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
        defaultOptions={{
            styles: mapStyles,
            fullscreenControl: false,
            zoomControl: false

        }}
    >
        <Marker

            position={
                { lat: lat, lng: lng }
            }


        />



    </GoogleMap>
}



const MapWrapped = withScriptjs(withGoogleMap(Map));



export default function ShowMaps(props) {



    return <div>
        <div style={{ width: "100%", height: "100vh" }}>
            <MapWrapped
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAaiHP2Akwa5NPa_WNDy7rv_SRAL3PJy1U`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />

        </div>
        <div className='buttom-close alrt-buttom'>

            <div className='class-maps'>
                <span>😍</span>
                <div className='class-maps-children'>
                    <span>
                        Stämmer det?
                    </span>
                    <span>Finjustera nålen tills du är klar och tryck sedan på fortsätt.</span>

                </div>

            </div>

        </div>
    </div>
}