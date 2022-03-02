import { Table } from 'react-bootstrap'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import { TabScreen, TabScrrenDor } from '../../../Components/TabScreen/TabScreen'
import Styles from '../style'




export default function CartItemsOrders(props) {

    const { ShowOrders, history } = props




    return <Table responsive  >
        <thead style={Styles.color}>
            <tr >
                <TabScreen TitleTh='Order Number' style={Styles.fontText} />
                <TabScreen TitleTh='Pric' style={Styles.fontText} />
                <TabScreen TitleTh='payment' style={Styles.fontText} />
                <TabScreen TitleTh='Paid' style={Styles.fontText} />
                <TabScreen TitleTh='delivery' style={Styles.fontText} />
                <TabScreen TitleTh='Detail' style={Styles.fontText} />
                <TabScreen TitleTh='edit' style={Styles.fontText} />
            </tr>

        </thead>
        {ShowOrders?.map((order, Index) => (

            <tbody style={Styles.color} key={Index}>
                <tr style={Styles.fontText}  >

                    <TabScrrenDor TitleTd={order?._id} />
                    <TabScrrenDor TitleTd={order?.itemsPrics} style={Styles.fontText} />
                    <TabScrrenDor TitleTd={order?.paymentMethod} style={Styles.fontText} />
                    <TabScrrenDor TitleTd={order?.ispaid ? 'yes' : 'no'} style={Styles.fontText} />
                    <TabScrrenDor TitleTd={order?.OrderStatus} style={Styles.fontText} />
                    <TabScrrenDor
                        TitleTd='detail'
                        style={Styles.fontText}
                        onClick={(e) => history.push(`/order/shipping/${order?._id}`)}
                    />
                    <TabScrrenDor other={
                        <div className='remove' style={Styles.edit}>
                            <ImageScreen ImageIcon={MyOderImage.edit}
                                style={Styles.iconsremov} />
                            <span  >Edit</span>

                        </div>
                    }

                    />





                </tr>

            </tbody>

        ))
        }


    </Table>








}