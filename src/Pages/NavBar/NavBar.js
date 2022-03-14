import './NavBar.css'
import { Link } from 'react-router-dom'
import { Container, Row, Col, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Styles from '../../Components/Update/StylesComponents/style'
import { useState } from 'react'
import LoginScreen from '../LoginScreen/LoginScreen'
import { useHistory } from 'react-router-dom'
import { SliceNameNot } from '../../Assistant/Slice'
import { FirstNameRest } from '../../Assistant/Selection'
import NavBarSearchingHome from '../../Components/Update/NavBarSearchingHome/NavBarSearchingHome'
import { LogoUtUser } from '../../Components/CloseScreen/CloseScreen'
import { TheProfile } from '../../Components/Update/Redirction/Redirction'
const NavBar = () => {



    const history = useHistory()
    // user Info ....
    const userLogin = useSelector((state) => state?.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    // testing login ...
    const [loginOpen, setLoginOpen] = useState(false)
























    return <Container fluid >
        <Row className='justify-content-center rowFexColo'>
            <Col xs={4} sm={4} md={4} lg={4} className='testincode'>
                <Link className="HoME_link_Home" to={{ pathname: '/uppsala/' }}>
                    <span className='font-nav-login' style={Styles.logText}>{FirstNameRest}</span>
                </Link>
            </Col>
            <Col xs={5} sm={3} md={3} lg={3} className='testincode'>
                <div className='handel-navbar'>
                    <NavBarSearchingHome />
                </div>

            </Col>

            <Col xs={3} sm={4} md={4} lg={4} className='testincode'>
                <div className='handel-navbar'>



                    {!userInfo?.firstname ?
                        <div className='loin-style' style={Styles.style} onClick={(e) => setLoginOpen(!loginOpen)} >
                            <span>login</span>
                        </div>
                        :


                        <NavDropdown
                            id="nav-dropdown-dark-example"

                            title={
                                <span className='routeNmae'> {SliceNameNot(userInfo?.firstname, 1)} {SliceNameNot(userInfo?.lastname, 1)}</span>
                            }
                            style={Styles.dropdown}
                        >

                            <NavDropdown.Item onClick={(e) => TheProfile(history ,userInfo?.cartinfo)}>
                                
                                <div className='flex-profile'>
                                    <span>My Profiel</span>
                                    <span className='font-fex'>{userInfo?.firstname} {userInfo?.lastname}</span>
                                </div>
                            </NavDropdown.Item>

                            <NavDropdown.Item onClick={(e) => LogoUtUser(dispatch)}>
                                <div style={Styles.Link_no} >
                                    <span className='line-size' >logo ut</span>
                                </div>

                            </NavDropdown.Item>







                        </NavDropdown>

                    }

                </div>
            </Col>



        </Row>


        <LoginScreen
            loginOpen={loginOpen}
            setLoginOpen={setLoginOpen}

        />

    </Container>


}


export default NavBar

