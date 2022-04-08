



  const Mahmoud = [
    {
      _id : 1,
      name : 'Mahmoud',
      fristName : true
    },
    {
      _id : 2,
      name : 'ahmed',
      fristName : true
    },
    {
      _id : 3,
      name : 'sabina',
      fristName : true
    },{
      _id : 4,
      name : 'hossam',
      fristName : true
    },
    {
      _id : 5,
      name : 'abeer',
      fristName : false
    },
  ]


export default function Testing(){


  console.log('OLD',Mahmoud)

  const check = Mahmoud?.filter((x) => x?.fristName === false ? x : Mahmoud)

   check.map((x)=> x.fristName = true)

 




  console.log(check)




  return <div>
    {check.map((x,Index)=>(

      <div key={Index}>
        {x.name}
      </div>
    ))}
  </div>
}












// import React, {   useState } from 'react'
// import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
// import mapStyles from './mapStyles';

// const mapContainerStyle = {
//   height: "400px",
//   width: "100%",
// };


// const options = {
//   styles: mapStyles,
//   disableDefaultUI: true,
//   zoomControl: true,
// };
// export default function Testing() {




//   const [lat, setLat] = useState(Number(59.858131))
//   const [lng, setLng] = useState(Number(17.644621))


//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyAaiHP2Akwa5NPa_WNDy7rv_SRAL3PJy1U',
//     passive: true
//   });

//   const onMapClick = React.useCallback((e) => {
    
     
    
//     setLat(e.latLng.lat())
//     setLng(e.latLng.lng())

//   }, []);



//   if (loadError) return "Error";
//   if (!isLoaded) return "Loading...";




//   return <GoogleMap
//     mapContainerStyle={mapContainerStyle}
//     zoom={18}
//     center={{ lat, lng }}
//     options={options}
//     onClick={onMapClick}

//   >
//     <Marker
//       position={{ lat, lng }}
//       icon={{
//         url: `/MyOrder/food.png`,
//         origin: new window.google.maps.Point(0, 0),
//         anchor: new window.google.maps.Point(15, 15),
//         scaledSize: new window.google.maps.Size(30, 30),
//       }}



//     />
//   </GoogleMap>
// }


