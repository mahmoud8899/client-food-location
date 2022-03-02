import { Col, Row } from 'react-bootstrap'
import Input from '../../Components/Input/Input'
import Styles from '../../Components/Update/StylesComponents/style'
import { MyOderImage } from '../../Assistant/MyOrderImage'



export default function SingUp(props) {


    const { HandleLogin, ValtionMe,dataLogin, setDataLogin , } = props




  


    return <div className='singUp-top'>
        <Row className='justify-content-center'>
            <Col>
                <Input
                    titleStyle={Styles.box}
                    title='First Name'
                    placeholder='First Name'
                    onChange={(e) => setDataLogin({...dataLogin,firstname :e.target.value})}
                    validation={ValtionMe(dataLogin?.firstname, 'isUser')?.toString()}
                    type='text'
                    className='Input-type-style padding-left-none'
                    onKeyPress={(e) => e.key === 'Enter' ? HandleLogin(e) : null}

                />

            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
                <Input
                    titleStyle={Styles.box}
                    title='Last Name'
                    placeholder='Last Name'
                    onChange={(e) => setDataLogin({...dataLogin,lastname :e.target.value})}
                    validation={ValtionMe(dataLogin?.lastname, 'isUser')?.toString()}
                    type='text'
                    className='Input-type-style padding-left-none'
                    onKeyPress={(e) => e.key === 'Enter' ? HandleLogin(e) : null}

                />
            </Col>

        </Row>



        <Col xs={12} sm={12} md={12} lg={12}>
            <Input
                titleStyle={Styles.box}
                title='Phone number'
                placeholder='Phone number'
                onChange={(e) => setDataLogin({...dataLogin,telephone :e.target.value})}
                validation={ValtionMe(dataLogin?.telephone, 'isPhone')?.toString()}
                type='number'
                className='Input-type-style'
                ImageLog={MyOderImage.smartphone}
                onKeyPress={(e) => e.key === 'Enter' ? HandleLogin(e) : null}
            />

        </Col>


        <Col xs={12} sm={12} md={12} lg={12} className='singUp-bottom'>
            <Input
                titleStyle={Styles.box}
                title='your password'
                placeholder='Your Password'
                onChange={(e) => setDataLogin({...dataLogin,password :e.target.value})}
                validation={ValtionMe(dataLogin?.password, 'isPassword')?.toString()}
                type='password'
                className='Input-type-style'
                ImageLog={MyOderImage.password}
                onKeyPress={(e) => e.key === 'Enter' ? HandleLogin(e) : null}
            />

        </Col>



    </div>
}