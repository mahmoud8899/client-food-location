import { FormControl } from 'react-bootstrap'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import NavBarList from './NavBarList'
import Styles from '../../../Components/Update/StylesComponents/style'



export default function OrderNavBarSearching(props) {
    const { setQuery } = props



    return <NavBarList

        Other={
            <div className='Order-List-New-other'>
                <div className='AddClass-c add-left'>
                    <ImageScreen
                        ImageIcon={MyOderImage.delivery}
                        style={Styles.TabBoximage}
                    />
                    <span>List Orders</span>

                </div>


            </div>


        }
        OtherLast={
            <div className='Order-List-New-other'>
                <FormControl
                    className='with-input'
                    placeholder='Searching Orders...'
                    onChange={(e) => setQuery(e.target.value)}
                    style={Styles.NavBarSearchingColorInput}

                />

                <ImageScreen
                    ImageIcon={MyOderImage.search}
                    className='Searching-input'
                    
                />
            </div>

        }
    />
}