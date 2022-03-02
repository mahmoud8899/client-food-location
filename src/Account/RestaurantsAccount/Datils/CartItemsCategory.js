import { Table } from 'react-bootstrap'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import { TabScreen, TabScrrenDor } from '../../../Components/TabScreen/TabScreen'
import Styles from '../style'





export default function CartItemsCategory(props) {


   



    return <Table responsive >
            <thead style={Styles.color}>
                <tr style={Styles.color}>
                    <TabScreen TitleTh='username' style={Styles.fontText} />
                    <TabScreen TitleTh='edit' style={Styles.fontText} />
                    <TabScreen TitleTh='remove' style={Styles.fontText} />
                </tr>

            </thead>
            <tbody style={Styles.color}  >
                {props?.ListCategoryUX?.map((category, Index) => (
                    <tr style={Styles.color} key={Index}>

                        <TabScrrenDor TitleTd={category?.name} style={Styles.fontText} />

                        <TabScrrenDor other={
                            <div className='remove' style={Styles.edit}>
                                <ImageScreen ImageIcon={MyOderImage.edit}
                                    style={Styles.iconsremov} />
                                <span  >Edit</span>

                            </div>
                        }
                            onClick={() => props?.setEditCategory({value : true, object : category})}
                        />
                        <TabScrrenDor other={
                            <div className='remove' style={Styles.remove}>
                                <ImageScreen ImageIcon={MyOderImage.remove}
                                    style={Styles.iconsremov} />
                                <span  >remove</span>

                            </div>
                        }
                            onClick={() => console.log('clcik')}
                        />

                    </tr>
                ))}


            </tbody>

        </Table>





}