import { Col, Row } from 'react-bootstrap'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../ImageScreen/ImageScreen'
import '../../../Pages/Home/Home.css'


export default function SearchingResultHome(props) {




    return <Row className='justify-content-center'>
        <Col xs={12} sm={12} md={6} lg={6} className='result-col'  >
            <div className='searching-result'>
                <ImageScreen
                    ImageIcon={MyOderImage.food}
                    className='result-image'
                />
                <div className='rigth-result'>
                    <span className='rigth-result-first'>food uppsala</span>
                    <span className='rigth-result-last'>this is foood god</span>
                </div>
            </div>

            <div className='searching-result'>
                <ImageScreen
                    ImageIcon={MyOderImage.food}
                    className='result-image'
                />
                <div className='rigth-result'>
                    <span className='rigth-result-first'>food uppsala</span>
                    <span className='rigth-result-last'>this is foood god</span>
                </div>
            </div>


            <div className='searching-result'>
                <ImageScreen
                    ImageIcon={MyOderImage.food}
                    className='result-image'
                />
                <div className='rigth-result'>
                    <span className='rigth-result-first'>food uppsala</span>
                    <span className='rigth-result-last'>this is foood god</span>
                </div>
            </div>
        </Col>
    </Row>

}