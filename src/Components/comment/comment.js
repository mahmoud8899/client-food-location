import { Row, Col, Form } from 'react-bootstrap'
import { format } from 'timeago.js'
import Rating from '../Rating/Rating'
import { Link } from 'react-router-dom'
import Styles from './style'
import ButtomClick from '../Buttom/Buttom'
import Input from '../Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { ReviewCommentUserAction } from '../../redux/Action/Product_Action'
import ScreenAlrt from '../../Components/ScreenAlrt/ScreenAlrt'
import { useEffect, useState } from 'react'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import * as ActionTypes from '../../redux/Action/Types'
const Componenstcomment = (props) => {


    const {
        productId,
        userInfo,
    } = props

    const dispatch = useDispatch()



    const [rating, setRating] = useState('')
    const [comment, setComment] = useState('')
    const [handleInput, setHandleInput] = useState('')


    const productID = useSelector((state) => state.productID)
    const { error, loading } = productID


    useEffect(()=>{

        if(error){
        
            setTimeout(() => {

                return dispatch({
                    type: ActionTypes.ADD_PRODUCT_ID_FAIL,
                    payload: null
                })
                
            }, 2000);

        }

    },[dispatch,error])




    // handle
    const ClickUserComment = (event) => {
        event.preventDefault();
        // setHandleInput('Type Input')
        if (!comment || !rating) return setHandleInput('Type Input')

        const sendData = {
            _id: productId?._id,
            rating: rating,
            usercomment: comment?.toLowerCase(),

        }

        console.log(sendData)

        dispatch(ReviewCommentUserAction(sendData))

        setComment('')
        setRating('')
        setHandleInput('')
    }



    // console.log(rating?.length)

    const ValtionInput = (name, max) => {

        if (name?.length >= max) return 'true'

    }


    console.log(error)

    return <Row> {

        loading ? <LoadingScreen />
            : error ?
                <ScreenAlrt
                    userCheck
                    textName='comment is one...'
                    alertid
                />
                :
                <Col xs={11} lg={5} style={Styles.top_commit_xp}>

                    {productId?.comment?.map((commituser, commitIndex) => (
                        <div style={Styles.Comment_User} key={commitIndex}>

                            <div style={Styles.Comment_User_Info} >
                                <span style={Styles.name}>{commituser?.firstname}</span>
                                <Rating value={commituser?.rating} />
                            </div>
                            <p style={Styles.user_text_comment}   >
                                <span style={Styles.time_commit} >{format(commituser?.date)}</span>
                                {commituser?.usercomment}
                                .</p>

                        </div>
                    ))}






                    {
                        userInfo?.firstname ?

                            <div className="commentUser_star">


                                <Form onSubmit={ClickUserComment}>
                                    <select
                                        style={Styles.input_selector_user}
                                        onChange={(e) => setRating(e.target.value)}
                                    >
                                        <option> Value</option>
                                        <option value="1">1  good </option>
                                        <option value="2">2 very good </option>
                                        <option value="3">3 Excellent </option>
                                        <option value="4">4 The best</option>
                                        <option value="5">5 number one</option>
                                    </select>
                                    <p style={Styles.error}>{!ValtionInput(rating, 1) && handleInput}</p>
                                    <Input
                                        as='textarea'
                                        rows={3}
                                        placeholder='comment here'
                                        value={comment}
                                        style={Styles.input}
                                        onChange={(e) => setComment(e.target.value)}
                                        validation={ValtionInput(comment, 7)}
                                        onKeyPress={(e) => e.key === 'Enter' ? ClickUserComment(e) : null}
                                    />
                                    <p style={Styles.error} > {!ValtionInput(comment, 7) && handleInput}</p>
                                    <ButtomClick
                                        title='comment'
                                        style={Styles.style}
                                        disabled={!ValtionInput(comment, 7) || !ValtionInput(rating, 1)}
                                    />

                                </Form>

                            </div>

                            :

                            <div className="Logoin_user">
                                If you want to rate the product, you must
                                <Link style={Styles.login} className="Logoin_user_user" to={`/login`}>
                                    log in
                                </Link>
                            </div>
                    }

                </Col>
    }
    </Row>



}


export default Componenstcomment


