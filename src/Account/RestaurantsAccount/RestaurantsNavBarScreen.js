import { ListGroup, Row, Col } from 'react-bootstrap'
import { SliceName } from '../../Assistant/Slice'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import { useHistory } from 'react-router-dom'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import Styles from '../../Components/Update/StylesComponents/style'

export default function RestaurantsNavBarScreen(props) {
    const {
        classNameSitting,
        OpenBankAcount,
        ClassNameUpdate,
        ClassNameOrder,
        ClassCategoryActive,
        ClassNotfication
    } = props


    const history = useHistory()




    // all  navigation 
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

        <Col xs={6} sm={12} md={12} lg={12} style={Styles.Tabbox}>
            <ListGroup onClick={(e) => HomePage(e)} >
                <ListGroup.Item style={ClassNotfication? Styles.TabActive :Styles.TabBoxChildren}>
                    <ImageScreen
                        ImageIcon={MyOderImage.notification}
                        style={Styles.TabBoximage}
                    />
                    {SliceName('Notification', 10)}
                </ListGroup.Item>
            </ListGroup>
        </Col>


        <Col xs={6} sm={12} md={12} lg={12} style={Styles.Tabbox} >
            <ListGroup onClick={(e) => OrderPage(e)}>
                <ListGroup.Item style={ClassNameOrder ?  Styles.TabActive  : Styles.TabBoxChildren} >
                    <ImageScreen ImageIcon={MyOderImage.basket2} style={Styles.TabBoximage} />
                    {SliceName('views orders', 10)}</ListGroup.Item>
            </ListGroup>
        </Col>




        <Col xs={6} sm={12} md={12} lg={12} style={Styles.Tabbox}  >
            <ListGroup onClick={(e) => ProductPage(e)}   >
                <ListGroup.Item style={ClassNameUpdate  ? Styles.TabActive: Styles.TabBoxChildren}>
                    <ImageScreen ImageIcon={MyOderImage.product} style={Styles.TabBoximage} />
                    list Products
                </ListGroup.Item>
            </ListGroup>
        </Col>

        <Col xs={6} sm={12} md={12} lg={12} style={Styles.Tabbox} >
            <ListGroup onClick={(e) => CategoryPage(e)}>
                <ListGroup.Item style={ClassCategoryActive ? Styles.TabActive :  Styles.TabBoxChildren} >
                    <ImageScreen ImageIcon={MyOderImage.category} style={Styles.TabBoximage} />
                    list category
                </ListGroup.Item>
            </ListGroup>
        </Col>





        <Col xs={12} sm={12} md={12} lg={12} style={Styles.Tabbox} >
            <ListGroup >
                <ListGroup.Item style={Styles.TabBoxChildren} >
                    <ImageScreen ImageIcon={MyOderImage.chat} style={Styles.TabBoximage} />
                    {SliceName('chat with servis', 10)}</ListGroup.Item>
            </ListGroup>
        </Col>


        <Col xs={12} sm={12} md={12} lg={12} style={Styles.Tabbox}>
            <ListGroup onClick={(e) => ProfilPage(e)}>
                <ListGroup.Item style={classNameSitting ? Styles.TabActive : Styles.TabBoxChildren} >
                    <ImageScreen ImageIcon={MyOderImage.user} style={Styles.TabBoximage} />
                    {SliceName('Sitting', 10)}
                </ListGroup.Item>
                {classNameSitting && <>
                    <ListGroup.Item style={Styles.TabBoxChildren} onClick={(e) => OpenBankAcount(e)} >
                        <ImageScreen ImageIcon={MyOderImage.change} style={Styles.TabBoximage} />
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
