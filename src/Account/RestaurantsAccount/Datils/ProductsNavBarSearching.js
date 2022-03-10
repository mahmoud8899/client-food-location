import { FormControl } from 'react-bootstrap'
import Styles from '../../../Components/Update/StylesComponents/style'
import NavBarList from './NavBarList'
import { BiCloudUpload, BiSearch } from 'react-icons/bi'




export default function ProductsNavBarSearching(props) {
    const {
        setShow,
        setQuery
    } = props



    return <NavBarList
        onClick={(e) => setShow({ value: true, object: '' })}
        Other={
            <div className='Order-List-New-other'>
                <div style={Styles.NavBarSearchingColor} className='AddClass-c'>
                    <BiCloudUpload style={Styles.TabBoximage} />
                    <span>Create Product</span>


                </div>


            </div>


        }
        OtherLast={
            <div className='Order-List-New-other'>
                <FormControl
                    className='with-input'
                    placeholder='Searching Product...'
                    onChange={(e) => setQuery(e.target.value)}
                    style={Styles.NavBarSearchingColorInput}

                />

                <BiSearch
                    style={Styles.searchingcolor}
                    className='Searching-input'
                />
            </div>

        }
    />

}