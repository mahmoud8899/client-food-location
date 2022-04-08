import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import {  options } from '../../../Components/MyAddress/OptionMaps'


export default function MapsLocation(props) {
    const { className, coordinates } = props

    const mapContainerStyle = {
        height: className,
        width: "100%",
    };



    // loading and error 
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAaiHP2Akwa5NPa_WNDy7rv_SRAL3PJy1U',
        passive: true
    });

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";


    return <div className={className}>

        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={8}
            center={{ lat: Number(coordinates[0]), lng: Number(coordinates[1]) }}
            options={options}


        >
            <Marker
                position={{ lat: Number(coordinates[0]), lng: Number(coordinates[1]) }}
                icon={{
                    url: `/MyOrder/food.png`,
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(15, 15),
                    scaledSize: new window.google.maps.Size(30, 30),
                }}



            />
        </GoogleMap>

    </div>
}

