import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function UserVerifiedID(props) {
    const { children } = props


    const history = useHistory()

    const CheckUser = useSelector((state) => state?.userLogin?.userInfo)







    useEffect(() => {
        if (!CheckUser?.firstname) {
            return history.push('/uppsala/')
        } else {

            return console.log('not')

        }

    }, [history, CheckUser?.firstname])





    return <div>
        {CheckUser?.firstname &&

            children

        }
    </div>
}