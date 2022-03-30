import TheInputForm from '../../TheInputForm/TheInputForm'
import { BiMap } from 'react-icons/bi'


export default function InputSearchLocation() {





    return <TheInputForm
        placeholder='Enter Street address'
        type='text'
        FirstIcons={<BiMap className='Icons-LEFT' />}
        className='Input-type-style productdetials add-left-text'

    />
}



