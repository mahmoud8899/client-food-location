import { Form } from 'react-bootstrap'
import { useState, Fragment } from 'react'

export default function NavBarSearchingHome(props) {





    const [input, setInput] = useState('')


   


    return <Fragment>
        <Form.Control
            type='text'
            placeholder='Search'
            className='Type-input-searching add-Home'
            onChange={(e) => setInput(e.target.value)}
            value={input}

        />




      





    </Fragment>



}