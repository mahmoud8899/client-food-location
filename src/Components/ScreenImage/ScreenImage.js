import { Row, Col, Image } from 'react-bootstrap'
import { Fragment } from 'react'
import Title from '../ScreenTitle/ScreenTitle'
import Styles from './style'
import './style.css'
const ScrrenImage = (props) => {


    const {
        openImage,
        setOpenImage,
        imageShow,
    } = props




    return <Fragment>


        <Title TextTitle="Create Post" />




        <Row className="justify-content-center">
            <Col xs={12} md={12} lg={4} className={openImage ? "Add_open open" : "Add_open"}>
                <div className="test_code">


                    <p
                        style={Styles.close}
                        onClick={
                            (e)=> setOpenImage(false)
                        }
                    >X
                    </p>
                    <Image
                        src={imageShow}
                        alt={imageShow}
                        style={Styles.image}

                    />

                </div>

            </Col>
        </Row>



    </Fragment>

}



export default ScrrenImage