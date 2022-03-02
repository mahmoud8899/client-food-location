import { FirstNameRest } from "../../../Assistant/Selection";
import ButtomClick from "../../Buttom/Buttom";
import Input from "../../Input/Input";
import Styles from "../StylesComponents/style";




export default function DriverComment(props) {
    const {
        setOpenComment
    } = props



    return <div className='close-yourOrder add-heigth'>

        <h1 className='your-h1'>Add comment</h1>
        <span className='comment-image-top-text-last'>
            Your comment may be shared with {FirstNameRest} partners who prepare and deliver your order.

        </span>

        <Input
            placeholder='Special requests, allergies, dietary. restrictions'
            className='comment-customs'
            as="textarea"
            ows={6}


        />




        <div className='button-comment-box'>
            <div className='button-comment-box-helf'>
                <ButtomClick
                    title='done'
                    style={Styles.buttomColorPage}
                    onClick={() => setOpenComment(false)}
                />
            </div>
        </div>
    </div>
}