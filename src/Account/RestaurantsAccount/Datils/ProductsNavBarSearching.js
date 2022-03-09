import { FormControl } from 'react-bootstrap'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import Styles from '../../../Components/Update/StylesComponents/style'
import NavBarList from './NavBarList'




export default function ProductsNavBarSearching(props) {
    const {
        setShow,
        setQuery
    } = props




    return <NavBarList
        onClick={(e) => setShow({ value: true, object: '' })}
        Other={
            <div className='Order-List-New-other'>
                <div  style={Styles.NavBarSearchingColor} className='AddClass-c'>
                    <ImageScreen ImageIcon={MyOderImage.uploading} style={Styles.TabBoximage} />
                    <span>Create Product</span>
          

                </div>


            </div>


        }
        OtherLast={
            <div className='Order-List-New-other'>
                <FormControl
                    className='with-input'
                    placeholder='Searching Product...'
                    onChange={(e)=> setQuery(e.target.value)}
                    style={Styles.NavBarSearchingColorInput}

                />

                <ImageScreen ImageIcon={MyOderImage.search} className='Searching-input' />
            </div>

        }
    />

}