import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import ImageScreen from '../ImageScreen/ImageScreen'
import Styles from './style'

const Input = (props) => {

    const {
        placeholder,
        title,
        onChange,
        as,
        rows,
        value,
        type,
        name,
        style,
        titleStyle,
        validation,
        inputSearch,
        className,
        min,
        max,
        multiple,
        column,
        required,
        ImageLog,
        onKeyPress,
        ImageView,
        ViewClick,



    } = props



    // const icons =  IconsRigth  ?  ''  : null

    //  console.log(validation)

    return <Form.Group as={Row} className="mb-2" id="category_type" >
        {title ? <Form.Label column={column} sm={2} style={titleStyle ? titleStyle : Styles.text}>

            {title}

        </Form.Label> : null}

        <Col sm='12' style={Styles.box} >
            <Form.Control
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                type={type}
                name={name}
                style={style}
                as={as}
                rows={rows}
                min={min}
                max={max}
                className={className}
                required={required}
                multiple={multiple}
                onKeyPress={onKeyPress}


            />

            {ImageLog ?
                <div style={Styles.Iconsleft}>
                    <ImageScreen style={Styles.Iconstyle} ImageIcon={ImageLog}    />
                </div>
                : null}




            {validation === 'true' ?

                <div style={Styles.Icons}>
                    <i style={Styles.Iconstyle} className='fas fa-check' ></i>
                </div> : null

            }
            
            {ImageView && 

                <div style={Styles.Iconsrigth} onClick={ViewClick}>
                   <ImageScreen  ImageIcon={MyOderImage.view}  style={Styles.Iconstyle} />
                </div> 

            }

            {inputSearch ?
                <div style={Styles.Icons}>
                    <i style={Styles.Iconstyle} className='fas fa-search' ></i>
                </div> : null


            }
        </Col>



    </Form.Group>


}


export default Input


/*
<div style={Styles.Icons}>
                <i style={Styles.Iconstyle} className={IconsRigth}></i>
            </div> : null
*/