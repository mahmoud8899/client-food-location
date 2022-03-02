import { Container, Row, Col } from 'react-bootstrap'
import './style.css'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import { FirstNameRest } from '../../Assistant/Selection'
export default function SomethingFail({history}) {

 

const HomePage = (e)=> {
    e.preventDefault()
    return history.push('/')
}
    return <Container fluid>

      

        <Row className='justify-content-center'>
            <Col xs={12} sm={12} md={6} lg={6}>
                <div className='Image-something'>
                    <ImageScreen ImageIcon={MyOderImage.cooking} className='cooking' />
                    <div className='flex-something'>
                        <span className='flex-something-first'>    Something unexpected happened</span>

                        <span className='flex-something-first-text'>Unfortunately, we couldn't find the content you were looking for. Sorry for the hassle!</span>
                        <div className='back-buttom' onClick={(e)=>HomePage(e)}>
                            <span>back to {FirstNameRest}</span>
                        </div>
                    </div>

                </div>
            </Col>
        </Row>

    </Container>
}