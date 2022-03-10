
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CodeError from '../../CodeError/CodeError'
import LoadingScreen from '../../LoadingScreen/LoadingScreen'
export default function RestaurantidVerify({ children }) {


    const history = useHistory()


    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo, error, loading } = userLogin



    useEffect(() => {

        // if (!userInfo?.restaurantid) {

        //     return history.push(`/uppsala`)

        // }

    }, [history, userInfo])




    return <>
        {loading ?
            <LoadingScreen />
            : error ?
                <CodeError error='error' />

                :

                !userInfo?.restaurantid ? history.push('/uppsala/')
                    :
                    children

        }

    </>

}