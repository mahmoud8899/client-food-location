import { Row, Col, Form, } from 'react-bootstrap'
import { AddSstich, timeFrom, theTimeNow } from '../../../Assistant/Selection'
import React, { useState, useEffect } from 'react'

export default function OrderTimeScreen(props) {
    const { setTimeOrder, setDateOrder, cartinfo } = props



    const [changeDateLocal, setChangeDateLocal] = useState(false)

    useEffect(() => {

    }, [changeDateLocal])








    // fick data
    const userOptimtim = {
        oppen: cartinfo?.opentime?.oppen,
        close: cartinfo?.opentime?.close
    }







    const Hnadlechange = (name) => {

        // console.log('click')
        setDateOrder(`${AddSstich(name)} - ${name.slice(5, 16)} -`)
        if (name === 'today') {
            setChangeDateLocal(false)
        } else {
            setChangeDateLocal(true)
        }

    }









    return <Row className='justify-content-center'>

        <Col xs={6} sm={6} md={6} lg={6}>

            <Form>
                <Form.Control as='select' className='ADD-SELECT'
                    onChange={(e) => Hnadlechange(e.target.value)}>
                    {timeFrom(-7)?.map((us, Index) => (
                        <option value={Index === 0 ? 'today' : us} key={Index} >
                            {Index === 0 ? 'today' : Index === 1 ? 'tomorrow' : AddSstich(us)}
                        </option>
                    ))}
                </Form.Control>
            </Form>

        </Col>

        <Col xs={6} sm={6} md={6} lg={6}>
            <Form.Control
                as='select'
                className='ADD-SELECT'
                onChange={(e) => setTimeOrder(e.target.value)}
            >

                {theTimeNow(userOptimtim, changeDateLocal)?.map((x, Index) => (

                    <option key={Index} value={x}>{x}</option>
                ))}





            </Form.Control>

        </Col>


    </Row>


}


