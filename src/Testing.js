
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { Container, Row, Col, Image } from 'react-bootstrap'
// import './style.css'
// import { useEffect } from "react";
// export default function Testing() {



//     const newData = new Date()
//     const Hours =  newData.getHours()
//     const minuter = newData?.getMinutes()




//     useEffect(()=>{

//         const newData = new Date()
    

//             return console.log(newData?.getMinutes())
 

//     },[newData])



//     // console.log('data new', newData)




//     return <h1>test....</h1>



// }


// // const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 2,
// //     slidesToScroll: 1
// // };

// // const curent = [
// //     'https://choconutri.com/revolution/assets/slider-cafe/87d89-papecup.png',
// //     'https://choconutri.com/images/product/13.jpg',
// //     'https://choconutri.com/images/product/19.jpg',
// //     'https://choconutri.com/revolution/assets/slider-cafe/87d89-papecup.png',
// //     'https://choconutri.com/images/product/13.jpg',
// //     'https://choconutri.com/images/product/19.jpg',
// //     'https://choconutri.com/revolution/assets/slider-cafe/87d89-papecup.png',
// //     'https://choconutri.com/images/product/13.jpg',
// //     'https://choconutri.com/images/product/19.jpg',
// //     'https://choconutri.com/revolution/assets/slider-cafe/87d89-papecup.png',
// //     'https://choconutri.com/images/product/13.jpg',
// //     'https://choconutri.com/images/product/19.jpg',
// //     'https://choconutri.com/revolution/assets/slider-cafe/87d89-papecup.png',
// //     'https://choconutri.com/images/product/13.jpg',
// //     'https://choconutri.com/images/product/19.jpg',
// // ]

// // <Container fluid> 
//     //     <Row className='justify-content-center'>
//     //         <Col xs={12} sm={12} md={12} lg={12}>

//     //             <div className='test'>
//     //                 <Slider {...settings}>

//     //                     {curent?.map((us, index) => (
//     //                         <Col key={index}>
//     //                             <Image src={us} className='image-slider-image' />
//     //                         </Col>
//     //                     ))}
//     //                 </Slider>
//     //             </div>

//     //         </Col>

//     //     </Row>
//     // </Container>
//     // const settings = {
//     //     className: "center",
//     //     infinite: true,
//     //     centerPadding: "60px",
//     //     slidesToShow: 1,
//     //     swipeToSlide: true,
//     //     afterChange: function (index) {
//     //         console.log(
//     //             `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
//     //         );
//     //     }
//     // };




// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css'
// import { Image, Container, Row, Col } from 'react-bootstrap'
// import './style.css'
// import "swiper/css/pagination";

// export default function Testing() {
  

//     const ImageSlider = [
//         'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg?crop=0.668xw:1.00xh;0.233xw,0.00255xh&resize=980:*',
//         'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg?crop=0.668xw:1.00xh;0.233xw,0.00255xh&resize=980:*',
//         'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg?crop=0.668xw:1.00xh;0.233xw,0.00255xh&resize=980:*',
//         'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg?crop=0.668xw:1.00xh;0.233xw,0.00255xh&resize=980:*',
//         'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg?crop=0.668xw:1.00xh;0.233xw,0.00255xh&resize=980:*',
//         'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg?crop=0.668xw:1.00xh;0.233xw,0.00255xh&resize=980:*',
//         'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg?crop=0.668xw:1.00xh;0.233xw,0.00255xh&resize=980:*',
//         'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg?crop=0.668xw:1.00xh;0.233xw,0.00255xh&resize=980:*',
//         'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg?crop=0.668xw:1.00xh;0.233xw,0.00255xh&resize=980:*',
//         'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg?crop=0.668xw:1.00xh;0.233xw,0.00255xh&resize=980:*',
//     ]

    
//     return (
//         <Container fluid >
//             <Row className='justify-content-center colow-xsw'>
//                 <Col xs={12} sm={12} md={12} lg={12}  >

//                     <Swiper
//                         spaceBetween={10}
//                         slidesPerView={3}
                        
//                         onSlideChange={() => console.log("slide change")}
//                         onSwiper={swiper => console.log(swiper)}
//                     >

//                         {ImageSlider?.map((x, Index) => (

//                             <SwiperSlide key={Index}>
                                
//                                 <Image
//                                     src={x}
//                                     className='Image-swiper'

//                                 />
                               
//                             </SwiperSlide>


//                         ))}


//                     </Swiper>




//                 </Col>



//             </Row>
//         </Container>

//     );
// };



