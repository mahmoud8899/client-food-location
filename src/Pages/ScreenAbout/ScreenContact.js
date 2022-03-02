import Styles from './style'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import { useEffect } from 'react'
import { ContactAction } from '../../redux/Action/contactAction'
import { useDispatch, useSelector } from 'react-redux'
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen'
const ScreenContact = () => {




    const allcontact = useSelector((state) => state.allcontact)
    const { loading, contact } = allcontact

    const dispatch = useDispatch()



    useEffect(() => {
        contact === null &&    dispatch(ContactAction())
    }, [dispatch,contact])



    // console.log(allcontact)


    return <Container  >
        <Title TextTitle='Contact us' />


        <Header
            Tital='Contact us'
            linkName='Go to Home'
            back='/'
        />
        {loading ? <LoadingScreen /> :
            <Row className='justify-content-center'>
                <Col sm={12} xs={12} md={12} lg={12} >
                    <div style={Styles.row}>




                        <div style={Styles.test} >
                            <div className="HoME_link_Home" >

                                <span style={Styles.logText}>  General</span>
                                <span style={Styles.First_NavBarList_writ_name_lastName} >Contact Information</span>


                            </div>
                        </div>

                        <div>
                            {contact?.map((cont) => (
                                <div key={cont._id} style={Styles.firstbox} >



                                    <div style={Styles.active}>
                                        <h1>{cont?.username}</h1>

                                        <div style={Styles.Contcat}>
                                            <span style={Styles.fontemail} >address : {cont.addres}</span>
                                            <span style={Styles.fontemail} >city : {cont.city}</span>
                                            <span style={Styles.fontemail} >zip cod : {cont.zipCode}</span>
                                            <span style={Styles.fontemail} >email : {cont.email}</span>
                                            <span style={Styles.fontemail}>telefon : {cont.Telephone}</span>
                                        </div>
                                    </div>



                                </div>
                            ))}
                        </div>


                    </div>


                </Col>

            </Row>
        }

    </Container>
}


export default ScreenContact