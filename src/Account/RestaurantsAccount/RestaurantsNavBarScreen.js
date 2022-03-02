import { ListGroup, Row, Col } from 'react-bootstrap'
import { SliceName } from '../../Assistant/Slice'
import Styles from './style'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import { useHistory } from 'react-router-dom'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'

export default function RestaurantsNavBarScreen(props) {

    const { classNameSitting, OpenBankAcount } = props


    const history = useHistory()




    const HomePage = (e) => {
        e.preventDefault()

        return history.push(`/sw/restaurants/admin/620d1f1084f54514ebb4dac8`)
    }

    const ProductPage = (e) => {
        e.preventDefault()

        return history.push(`/sw/restaurants/admin/product/620d1f1084f54514ebb4dac8`)
    }

    const CategoryPage = (e) => {
        e.preventDefault()

        return history.push(`/sw/restaurants/admin/category/620d1f1084f54514ebb4dac8`)
    }

    const OrderPage = (e) => {
        e.preventDefault()

        return history.push(`/sw/restaurants/admin/order/620d1f1084f54514ebb4dac8`)
    }


    const ProfilPage = (e) => {
        e.preventDefault()

        return history.push(`/sw/restaurants/admin/profile/620d1f1084f54514ebb4dac8`)
    }





    return <Row className='justify-content-center'>

        <Col xs={6} sm={12} md={12} lg={12} style={Styles.box}>
            <ListGroup onClick={(e) => HomePage(e)} >
                <ListGroup.Item style={Styles.boxChildren}>
                    <ImageScreen
                        ImageIcon={MyOderImage.notification}
                        style={Styles.image}
                    />
                    {SliceName('Notification', 10)}
                </ListGroup.Item>
            </ListGroup>
        </Col>


        <Col xs={5} sm={12} md={12} lg={12} style={Styles.box} >
            <ListGroup onClick={(e) => OrderPage(e)}>
                <ListGroup.Item style={Styles.boxChildren} >
                    <ImageScreen ImageIcon={MyOderImage.basket2} style={Styles.image} />
                    {SliceName('views orders', 10)}</ListGroup.Item>
            </ListGroup>
        </Col>




        <Col xs={6} sm={12} md={12} lg={12} style={Styles.box}>
            <ListGroup onClick={(e) => ProductPage(e)}>
                <ListGroup.Item style={Styles.boxChildren}>
                    <ImageScreen ImageIcon={MyOderImage.product} style={Styles.image} />
                    list Products
                </ListGroup.Item>
            </ListGroup>
        </Col>

        <Col xs={5} sm={12} md={12} lg={12} style={Styles.box} >
            <ListGroup onClick={(e) => CategoryPage(e)}>
                <ListGroup.Item style={Styles.boxChildren} >
                    <ImageScreen ImageIcon={MyOderImage.category} style={Styles.image} />
                    list category
                </ListGroup.Item>
            </ListGroup>
        </Col>





        <Col xs={11} sm={12} md={12} lg={12} style={Styles.box} >
            <ListGroup >
                <ListGroup.Item style={Styles.boxChildren} >
                    <ImageScreen ImageIcon={MyOderImage.chat} style={Styles.image} />
                    {SliceName('chat with servis', 10)}</ListGroup.Item>
            </ListGroup>
        </Col>


        <Col xs={11} sm={12} md={12} lg={12} style={Styles.box}>
            <ListGroup onClick={(e) => ProfilPage(e)}>
                <ListGroup.Item style={Styles.boxChildren} >
                    <ImageScreen ImageIcon={MyOderImage.user} style={Styles.image} />
                    {SliceName('Sitting', 10)}
                </ListGroup.Item>
                {classNameSitting && <>
                    <ListGroup.Item style={Styles.boxChildren} onClick={(e) => OpenBankAcount(e)} >
                        <ImageScreen ImageIcon={MyOderImage.change} style={Styles.image} />
                        {SliceName('add acount', 10)}
                    </ListGroup.Item>

                </>}

            </ListGroup>
        </Col>





    </Row>



}


// {/* <ListGroup.Item style={Styles.boxChildren} onClick={(e) => {}}>
// <ImageScreen ImageIcon={MyOderImage.edit} style={Styles.image} />
// {SliceName('change addres', 10)}
// </ListGroup.Item> */}
// /        <Col xs={3} sm={12} md={12} lg={12} style={Styles.box}>
// <ListGroup onClick={(e) => ProductPage(e)}>
//     <ListGroup.Item style={Styles.boxChildren}>
//         <Image
//             src={MyOderImage.view}
//             style={Styles.image}
//             alt={MyOderImage.view}
//         />
//         {SliceName('Update', 10)}
//     </ListGroup.Item>
// </ListGroup>
// </Col>
