import { Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import ButtomClick from "../../Buttom/Buttom";
import Styles from "../StylesComponents/style";
import TheInputForm from '../../TheInputForm/TheInputForm'
import { RiCheckFill } from 'react-icons/ri'
import { ValtionMe } from '../../../Assistant/ValtionMe'



export default function DriverComment(props) {



    const [inputText, setInputText] = useState('')


    const SendTextToDriver = (e) => {
        e.preventDefault()
        if (inputText?.trim()) {
            console.log('M', inputText?.trim())
        }

    }



    return <div className='close-yourOrder add-heigth'>

        <h1 className='your-h1'>Lägg till kommentar</h1>
        <span className='comment-image-top-text-last'>

        Vi kan behöva dela din kommentar med de som hanterar eller levererar din beställning.

        </span>

        <Form onSubmit={SendTextToDriver} >
            <TheInputForm
                placeholder='Särskilda önskemål, allergier, diet. restriktioner'
                className='comment-customs'
                as="textarea"
                value={inputText}
                ows={6}
                onChange={(e) => setInputText(e.target.value)}
                FirstIcons={
                    <Fragment>
                        {ValtionMe(inputText, 'inputname')
                            ? <RiCheckFill className='Icons-LEFT-right' /> : null
                        }
                    </Fragment>
                }
            />

            <div className='button-comment-box'>
                <div className='button-comment-box-helf'>
                    <ButtomClick
                        title='skicka in'
                        style={Styles.buttomColorPage}
                        disabled={!ValtionMe(inputText, 'inputname')}
                        onClick={(e) => SendTextToDriver(e)}
                    />
                </div>
            </div>
        </Form>


    </div>
}