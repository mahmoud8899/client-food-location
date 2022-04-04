import { Form } from 'react-bootstrap'
import { Stand } from '../../Assistant/Selection'
import Styles from '../Update/StylesComponents/style'



export default function FirstPage(props) {

const {query, setQuery} = props

  


    return <div className='first-lagg'>
     

        <div className='hitta-hitta'>
            <span className='classPluseTitel'>Skriv din adress för att hitta restauranger och affärer i ditt område.</span>
        </div>

        <span className='selection-name bottom-select'>Välj stad</span>
        <Form.Control
            as='select'
            style={Styles.input_selector_user}
            onChange={(e) => setQuery(e.target.value)}
            value={query}
        >
            <option>value</option>
            {Stand?.map((city, Index) => (
                <option
                    value={city.name}
                    key={Index}>
                    {city.name}
                </option>
            ))}
        </Form.Control>
    </div>
}


// /   <h1 className='font-edit'>Lägg till ny adress</h1>