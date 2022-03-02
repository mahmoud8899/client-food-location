import { Form } from 'react-bootstrap'
import { AddCart_Action, RemoveCart_Action } from '../../redux/Action/Cart_Action'
import { useDispatch } from 'react-redux'
import { CurrentNumber } from '../../Assistant/Selection'
import './style.css'
const Componentquantity = (props) => {


    const { productId, curunt ,notText } = props








    const dispatch = useDispatch()






    const HandleCreateNumber = (e) => {
        e.preventDefault()


        const qty = e.target.value

    //    testing coming data  console.log(qty, productId)

        if (qty <= 0) return dispatch(RemoveCart_Action(productId?.product))

        return dispatch(AddCart_Action(productId?.product, qty))
    }


    return <div className="Selector_Product_option">
      {notText ? null : null}  


        <Form.Control
            as='select'
            className="input_selector"
            value={curunt}
            onChange={(e) => HandleCreateNumber(e)}
        >
            {CurrentNumber.map(
                (x) => (
                    <option key={x} value={x} className='xpppppptestinf'>
                        {x}
                    </option>
                )
            )}
        </Form.Control>



    </div>

}


export default Componentquantity




