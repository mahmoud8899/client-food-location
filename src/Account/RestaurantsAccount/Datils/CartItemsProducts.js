import { Table } from 'react-bootstrap'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import { TabScreen, TabScrrenDor } from '../../../Components/TabScreen/TabScreen'
import Styles from '../style'
import {SliceNameNot} from '../../../Assistant/Slice'






export default function CartItemsProducts(props) {



    return   <Table responsive >
            <thead style={Styles.color}>
                <tr style={Styles.color}>
                    <TabScreen  TitleTh='number' style={Styles.fontText} />
                    <TabScreen TitleTh='username' style={Styles.fontText} />
                    <TabScreen   TitleTh='image' style={Styles.fontText} />
                    <TabScreen   TitleTh='prices' style={Styles.fontText} />
                      <TabScreen TitleTh='category' style={Styles.fontText} />
                    <TabScreen TitleTh='edit' style={Styles.fontText} />

                    <TabScreen TitleTh='remove' style={Styles.fontText} />

                </tr>

            </thead>
            <tbody style={Styles.color}>
                {props?.matProducts?.map((product, Index) => (
                    <tr style={Styles.color} key={Index}>
                        <TabScrrenDor TitleTd={SliceNameNot(product?._id, 10)} style={Styles.fontText} />
                        <TabScrrenDor TitleTd={product?.name} style={Styles.fontText} />
                        <TabScrrenDor other={<ImageScreen ImageIcon={product?.image} style={Styles.imageproduct} />} />
                        <TabScrrenDor TitleTd={product?.prices} style={Styles.fontText} />
                        <TabScrrenDor TitleTd={product?.category?.name} style={Styles.fontText} />
                        <TabScrrenDor other={
                            <div className='remove' style={Styles.edit}>
                                <ImageScreen ImageIcon={MyOderImage.edit} style={Styles.iconsremov} />
                                <span  >Edit</span>

                            </div>
                        }
                            onClick={() => props?.setShow({value : true, object : product})}
                        />
                        <TabScrrenDor other={
                            <div className='remove' style={Styles.remove}>
                                <ImageScreen ImageIcon={MyOderImage.remove} style={Styles.iconsremov} />
                                <span >remove</span>

                            </div>
                        }
                            onClick={() => console.log('clcik')}
                        />

                    </tr>
                ))}

            </tbody>

        </Table>






 




}