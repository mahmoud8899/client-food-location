import React, { useEffect, useState } from 'react'
import { ProgressBar } from 'react-bootstrap'
import { useDispatch } from 'react-redux'


const ScreenLoading = (props) => {


    const { loginSet, setLoginSet,singUp,dataSave,setDataSave } = props


    const [now, setNow] = useState(20)
    const dispatch = useDispatch()





    // Progress bars
    useEffect(() => {

        if (loginSet === true) {

            if (now === 100) {

                setNow(0)
                // // tesing .... console.log('dataSave', dataSave)
                //  singUp ?  dispatch(singUp_action(dataSave)) :   dispatch(user_Login(dataSave))
                // setDataSave([])
                return setLoginSet(false)
            }


            const conv = setInterval(() => {
                setNow(prev => prev + 20)


            }, 1000)

            return () => clearInterval(conv)

        }

    }, [loginSet, now,  dispatch,singUp,setLoginSet,setDataSave,dataSave])


    return <div className={loginSet ? "onlyLoginUser open" : "onlyLoginUser"}>
        <ProgressBar variant="danger" now={now} label={`${now}%`}
            className="allt_login_d"
        />
    </div>
}



export default ScreenLoading