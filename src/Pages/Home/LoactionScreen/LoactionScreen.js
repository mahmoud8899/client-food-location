import { Col, Container, Row } from 'react-bootstrap'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import '../Home.css'
import Input from '../../../Components/Input/Input'
import { FirstNameRest, Stand } from '../../../Assistant/Selection'
import ScreenAbout from '../../ScreenAbout/ScreenAbout'
// import * as ActionTypes from '../../../redux/Action/Types'
import {LoactionPath} from '../../../redux/Action/CartItemAction'
import {useDispatch} from 'react-redux'
export default function LocationScreen({ history }) {


  const dispatch =useDispatch()




  const SelectionCity = ( id) => {
  
    const city = id.toLowerCase()

    dispatch(LoactionPath(city))
   
    // console.log(id)
    history.push(`/${city}/`)
  }


  return <Container fluid>

    <div className='dev-top-top'>
      <Row >

        <Col xs={12} sm={12} md={12} lg={12} className='dev-top' >
          <ImageScreen ImageIcon={MyOderImage.loaction5} className='Cover-image-loaction' />

        </Col>
        <Col xs={12} sm={12} md={12} lg={12} className='back-color'>
          <h1 className='fontt'>Delivery address</h1>
          <Row>
            <Col xs={8} sm={5} md={4} lg={4}>
              <Input
                className='Input-type-style'
                placeholder='Example Street'
                ImageLog={MyOderImage.pin}

              />
            </Col>
            <Col xs={4} sm={2} md={2} lg={2}>
              <div className='searching-buttom'>
                Searching
              </div>
            </Col>
          </Row>
        </Col>



        <Col xs={12} sm={12} md={12} lg={12}>

          <div className='first-text-country'>
            Explore cities where you find {FirstNameRest}

          </div>

          <div className='box-country'>
            <div className='selection-image-country'>
              <ImageScreen ImageIcon={MyOderImage.sweden} className='Image-country' />
              <span className='flex-font-sw'>sweden</span>
            </div>


            <div className='text-city'>
              {Stand?.map((land) => (
                <div className='text-city-city' key={land} onClick={() => SelectionCity( land)} >
                  <span>{land}</span>
                  <ImageScreen ImageIcon={MyOderImage.right} className='Image-right' />
                </div>
              ))}


            </div>
          </div>


        </Col>

        <ScreenAbout />

      </Row>
    </div>
  </Container>
}

