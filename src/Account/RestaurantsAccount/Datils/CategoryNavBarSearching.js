import { FormControl } from 'react-bootstrap'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import Styles from '../../../Components/Update/StylesComponents/style'
import NavBarList from './NavBarList'




export default function CategoryNavBarSearching(props) {
    const {
        setEditCategory,
        setQuery
    } = props



    return <NavBarList
        onClick={() => setEditCategory({ value: true })}
        Other={
            <div className='Order-List-New-other'>
                <div style={Styles.NavBarSearchingColor} className='AddClass-c'>
                    <ImageScreen
                        ImageIcon={MyOderImage.uploading}
                        style={Styles.TabBoximage}
                    />
                    <span>Create Category</span>
                </div>


            </div>


        }
        OtherLast={
            <div className='Order-List-New-other'>
                <FormControl
                    className='with-input'
                    placeholder='Searching category...'
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