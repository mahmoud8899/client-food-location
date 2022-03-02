import { useHistory } from 'react-router-dom'
import '../UserProfileScreen/Profile.css'

const UserNavBarScreen = (props) => {

    const {
        clasNamePayment,
        ClassNameProfile,
        ClassNameAddress,
        ClassNameOrder,
        ClassNameSetting,
    } = props


    const history = useHistory()




    const PageHome = (e) => {
        e.preventDefault()
        return history.push('/sw/profil/personal/')
    }

    const PagePayment = (e) => {

        e.preventDefault()

        return history.push('/sw/profil/payment/')
    }


    const PageAddres = (e) => {
        e.preventDefault()

        return history.push('/sw/profil/address/')
    }


    const PageOrders = (e) => {
        e.preventDefault()

        return history.push('/sw/profil/orders/')
    }




    const PageSetting = (e) => {
        e.preventDefault()
        return history.push('/sw/profil/settings/')
    }



    return <div className='padding-null'>
        <div className='box-navbar'>
            <div className={ClassNameProfile ? 'Personal-Info action-personal' : 'Personal-Info'} onClick={(e) => PageHome(e)}>Personal info</div>
            <div className={clasNamePayment ? 'Personal-Info action-personal' : 'Personal-Info'} onClick={(e) => PagePayment(e)} >Payment methods</div>
            <div className={ClassNameAddress ? 'Personal-Info action-personal' : 'Personal-Info'} onClick={(e) => PageAddres(e)}>Addresses</div>
            <div className={ClassNameOrder ? 'Personal-Info action-personal' : 'Personal-Info'} onClick={(e) => PageOrders(e)}>order history</div>
            <div className='Personal-Info'> Redeem code</div>
            <div className={ClassNameSetting ? 'Personal-Info action-personal' : 'Personal-Info'} onClick={(e) => PageSetting(e)} >Settings</div>
        </div>

    </div>

}

export default UserNavBarScreen

