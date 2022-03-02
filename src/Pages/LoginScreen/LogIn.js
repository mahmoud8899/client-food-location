import { Fragment, useState } from 'react'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import Input from '../../Components/Input/Input'
import LoginWithOther from './LoginWithOther'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import CodeError from '../../Components/CodeError/CodeError'



export default function LogIn(props) {


    const {
        dataLogin,
        setDataLogin,
        HandleLogin,
        ValtionMe,
        setForget,
        forget,
        checkeduser,
        forgetPassword,
        changeState
    } = props


    const [changeType, setChangeType] = useState(false)

    const ViewClick = () => {
        setChangeType(!changeType)
        // console.log('clcik', changeType)
    }


    return <Fragment>

        {forget ? <>
            <div className=''>
                <ImageScreen
                    ImageIcon={MyOderImage.left}
                    className='Login-Close-Image-rigth add-left'
                    onClick={() => setForget(!forget)}
                />

            </div>
            {forgetPassword && <div className='forget-password-successfully'>
                <CodeError error={forgetPassword} />
            </div>}

            <ImageScreen
                ImageIcon={MyOderImage.forget}
                className='forget-password'
            />




        </> :
            <>
                <LoginWithOther />

                <div className='login-text-'>
                    <span className='login-text-one'></span>
                    <span className='login-text-center'>or log in with email</span>
                    <span className='login-text-tew'></span>
                </div>



                <div className='login-margin-top-bottom text-align-center'>

                </div>

             {checkeduser === 'ok' && 
             <ImageScreen
             ImageIcon={MyOderImage.left}
             className='Login-Close-Image-rigth login-padding'
             onClick={changeState}
         />
         }
            </>

        }

        <div className=''>
            <Input
                placeholder='Your Email'
                onChange={(e) => setDataLogin({ ...dataLogin, email: e.target.value })}
                type='email'
                validation={ValtionMe(dataLogin?.email, 'isEmail')?.toString()}
                value={dataLogin?.email}
                className='Input-type-style'
                ImageLog={MyOderImage.email}
                onKeyPress={(e) => e.key === 'Enter' ? HandleLogin(e) : null}
            />
        </div>
        <div >
            {forget ? null :
                checkeduser === 'ok' &&
                <>


                    <Input
                        placeholder='Your Password'
                        onChange={(e) => setDataLogin({ ...dataLogin, password: e.target.value })}
                        type={changeType ? 'text' : 'password'}
                        validation={ValtionMe(dataLogin?.password, 'isPassword')?.toString()}
                        value={dataLogin?.password}
                        className='Input-type-style'
                        ImageLog={MyOderImage.password}
                        ImageView={dataLogin?.password?.length >= 1 ? 'true' : null}
                        ViewClick={ViewClick}
                        onKeyPress={(e) => e.key === 'Enter' ? HandleLogin(e) : null}
                    />





                    <p className='login-margin-top-bottom forgetPassword'
                        onClick={() => setForget(!forget)} >forget password</p>
                </>

            }
        </div>










    </Fragment>
}