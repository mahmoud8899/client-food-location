import { Fragment, useContext, useState } from 'react'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import Styles from '../../Components/Update/StylesComponents/style'
import RestaurantsOneProduct from '../RestaurantsPageScreen/RestaurantsOneProduct'
import { CollectNumber } from '../../Assistant/CollectNumber'
import { FilterCartDetials } from '../../Components/Update/UseContext/FilterRestarangeProduct'
import { Conversion } from '../../Components/Update/Conversion/Conversion'
import AddOpenComponent from '../../Components/Update/AddOpenComponent/AddOpenComponent'
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen'
import ScreenAlrt from '../../Components/ScreenAlrt/ScreenAlrt'
import {SliceName} from '../../Assistant/Slice'
import { Col } from 'react-bootstrap'
import './PaymentScreen.css'

export default function PaymentCartIemsScreen(props) {




    const [openCartProduct, setOpenCartProduct] = useState({
        value: false,
        id: ''
    })
    const { filterCartProduct } = useContext(FilterCartDetials)










    return <Fragment>
        <Col xs={12} ms={12} md={12} lg={12} >

            <h1 className='Delivery-method-and-time'>
            Valda artiklar
            </h1>
            {props?.loading ? <LoadingScreen />
                : filterCartProduct?.length === 0
                    ? <ScreenAlrt
                        textName='Det finns inga saker du kan begära, du kommer att omdirigeras till huvudsidan'
                        userCheck
                        alertid
                        PathName={Conversion(props?.cartinfo)}

                    />
                    : filterCartProduct?.map((ca, Index) => (
                        <div className='NOTpadding'
                            key={Index}
                            onClick={(e) => setOpenCartProduct({ value: true, id: ca?._id })}
                        >

                            <div style={Styles.leftcOLOR}>

                            </div>

                            <div className='class-Handle-cart'>
                                <div className='first-items-left'>


                                    <div className='items-name-first'>
                                        <div style={Styles.colorcourrent} className='items-name-first-qty color-family'>
                                            {ca?.courrent}
                                            <span className='leftmore'>x</span>
                                        </div>
                                        <div className='items-name-first-name color-family'>
                                            {ca?.name}
                                        </div>
                                    </div>
                                    <div className='items-name-first-des color-last-items'>
                                        {SliceName(ca?.description, 40)  }
                                    </div>
                                    <div style={Styles.colorcourrent} className='prics-font'>
                                        kr {CollectNumber(ca?.courrent, ca?.prices)}
                                    </div>

                                </div>


                                <ImageScreen ImageIcon={ca?.image} className='image-selected' />
                            </div>



                        </div>
                    ))}



            <AddOpenComponent
                PathName={Conversion(props?.cartinfo)}
                Titel='lägg till artiklar'
                className='add-selected-item'
            />




        </Col>



        {openCartProduct?.value &&

            <RestaurantsOneProduct
                openCartProduct={openCartProduct}
                setOpenCartProduct={setOpenCartProduct}
                CheckOutReload
            />
        }

    </Fragment>
}