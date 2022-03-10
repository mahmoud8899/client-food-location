import { Container, Row, Col } from 'react-bootstrap'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import RestaurantsNavBarScreen from './RestaurantsNavBarScreen'
import NavBarList from './Datils/NavBarList'
import CartItemsInfo from './Datils/CartItemsInfo'
import { CartInfoActionResturan } from '../../redux/Action/CartItemAction'
import { useDispatch, useSelector } from 'react-redux'
import LoadingErrorHandle from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import EditCartInfo from './Datils/EditCartInfo'
import UserName from './Datils/UserName'
import { useEffect, useState } from 'react'
import Styles from '../../Components/Update/StylesComponents/style'
import './style.css'
import AddAccountUser from './Datils/AddAccountUser'
import { BiTaskX, BiNetworkChart, BiCheck, BiFolderOpen } from 'react-icons/bi'



export default function RestaurantsProfilScreen(props) {



    const { history } = props
    const dispatch = useDispatch()

    // user check ut
    const userLogin = useSelector((state) => state?.userLogin)
    const { userInfo } = userLogin




    // add account bank and oppen page....
    const [openAddAccount, setOpenAddAccount] = useState(false)
    // oppen Edit cart Info...
    const [show, setShow] = useState({ value: false, updated: false })

    // get all cart info..
    const pageUserCartinfo = useSelector((state) => state.pageUserCartinfo)
    const { loading, info, error } = pageUserCartinfo



    // get cart info from Server.....
    useEffect(() => {
        if (userInfo?.restaurantid) {
            return info?.length === 0 && dispatch(CartInfoActionResturan())

        } else {
            return history.push('/uppsala/')
        }
    }, [
       
        dispatch,
        info?.length,
        userInfo,
        history
    ])


    // open acount 
    const OpenBankAcount = (e) => {
        e.preventDefault()

        return setOpenAddAccount(true)
    }




    return <Container>
        <Title TextTitle='product Admin' />
        <div className='box'>
            <UserName />


        </div>

        <LoadingErrorHandle loading={loading} error={error} home={info}>
            <Row className='justify-content-center'>

                <Col xs={12} sm={12} md={4} lg={3} >
                    <RestaurantsNavBarScreen
                        classNameSitting
                        OpenBankAcount={OpenBankAcount}
                    />
                </Col>
                <Col xs={12} sm={12} md={8} lg={9} >
                    {info === 'Empty' ?

                        <div className='lagg-New-resta' style={Styles.colorcreate} onClick={() => setShow({ value: true, updated: true })}  >
                            <BiFolderOpen className='font-icons icons-right' style={Styles.coloricons} />
                            <span>Lägg till ny restaurang</span>
                            <BiCheck className='font-icons icons-left' style={Styles.coloricons} />
                        </div>

                        :
                        <>
                            <NavBarList
                                Other={
                                    <div className='Order-List-New-other'>
                                        <div style={Styles.colorback} className='Fistclass-handle'>
                                            <div className='half-fistclass'>
                                                <BiNetworkChart className='Image-sales' />
                                                <span>sales</span>
                                            </div>

                                            <div className='Fistclass'>

                                                <span>3029.00$</span>
                                            </div>


                                        </div>

                                    </div>


                                }
                                OtherLast={
                                    <div className='Order-List-New-other'>
                                        <div style={Styles.colorback} className='Fistclass-handle'>
                                            <div className='half-fistclass'>
                                                <BiTaskX className='Image-sales' />
                                                <span>cancel</span>

                                            </div>

                                            <div className='Fistclass'>

                                                <span>3 items</span>
                                            </div>
                                        </div>
                                    </div>

                                }
                            />

                            <CartItemsInfo
                                info={info}
                                setShow={setShow}
                            />
                        </>



                    }

                </Col>

            </Row>

            <AddAccountUser
                openAddAccount={openAddAccount}
                setOpenAddAccount={setOpenAddAccount}
            />
        </LoadingErrorHandle>

        <EditCartInfo
            show={show}
            setShow={setShow}
            info={info}
            userInfo={userInfo}
        />
    </Container>
}








