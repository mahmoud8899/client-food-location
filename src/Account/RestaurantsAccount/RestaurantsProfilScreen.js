import { Container, Row, Col } from 'react-bootstrap'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import RestaurantsNavBarScreen from './RestaurantsNavBarScreen'
import CartItemsInfo from './Datils/CartItemsInfo'
import { CartInfoActionResturan, FoodTypesAction } from '../../redux/Action/CartItemAction'
import { useDispatch, useSelector } from 'react-redux'
import Styles from '../../Components/Update/StylesComponents/style'
import LoadingErrorHandle from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import EditCartInfo from './Datils/EditCartInfo'
import UserName from './Datils/UserName'
import { useEffect, useState } from 'react'
import AddAccountUser from './Datils/AddAccountUser'
import { BiTaskX, BiNetworkChart } from 'react-icons/bi'
import { ErrorServer } from '../../Assistant/TextError'
import { PageEmpty } from '../../Components/Update/PageEmpty/PageEmpty'
import NavBarList from '../../Components/Update/NavBarSearchingTopAll/NavBarList'
import './style.css'



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

    // get all category...
    const pageHomeCategory = useSelector((state) => state?.pageHomeCategory)
    const { category ,error :errorCategory , loading : loadingCategory} = pageHomeCategory



    // get cart info from Server.....
    useEffect(() => {
        if (userInfo?.restaurantid) {
            return info?.length === 0 && dispatch(CartInfoActionResturan())

        } else {
            return history.push('/uppsala/')
        }
    }, [dispatch, info?.length, userInfo, history])



    // get category
    useEffect(() => {
        return category?.length === Number(0) && dispatch(FoodTypesAction())
    }, [category?.length, dispatch])





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


        <Row className='justify-content-center'>

            <Col xs={12} sm={12} md={4} lg={3} >
                <RestaurantsNavBarScreen
                    classNameSitting
                    OpenBankAcount={OpenBankAcount}
                />
            </Col>

            <Col xs={12} sm={12} md={8} lg={9} >
                <LoadingErrorHandle loading={loading} error={error} TextNotItems={ErrorServer} extraStyle>
                    {info === 'Empty' ?

                        <PageEmpty onClick={() => setShow({ value: true, updated: true })} />

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

                                                <span className='font-all'>3029.00$</span>
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

                                                <span className='font-all' >3 items</span>
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
                </LoadingErrorHandle>

            </Col>

        </Row>

        <AddAccountUser openAddAccount={openAddAccount} setOpenAddAccount={setOpenAddAccount} />
        <LoadingErrorHandle loading={loadingCategory} error={errorCategory} TextNotItems={ErrorServer} extraStyle  >
            <EditCartInfo
                show={show}
                setShow={setShow}
                info={info}
                userInfo={userInfo}
                category={category}
            />
        </LoadingErrorHandle>

    </Container>
}








