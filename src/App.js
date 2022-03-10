import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './Pages/Footer/Footer'
import HomeScreen from './Pages/Home/HomeScreen'
import UserProfileScreen from './Pages/User/UserProfileScreen/UserProfileScreen'
import Order from './Pages/Order/Order'
import ScreenLike from './Pages/Like/Like'
import ScreenWork from './Pages/ScreenAbout/ScreenWork'
import ScreenContact from './Pages/ScreenAbout/ScreenContact'
import ScreenAbout from './Pages/ScreenAbout/ScreenAbout'
import ForgetPassword from './Pages/LoginScreen/ForgetPassword'
import DriverItemsScreen from './Account/DriverAccount/DriverScreen/DriverItemScreen'
import DriverProfile from './Account/DriverAccount/DriverProfile/DriverProfile'
import CancalOrder from './Account/DriverAccount/DriverScreen/CancalOrder'
import ChatScreen from './Account/DriverAccount/MessageChat/ChatScreen'
import RestaurantsHomeScreen from './Account/RestaurantsAccount/RestaurantsHomeScreen'
import RestaurantsProductScreen from './Account/RestaurantsAccount/RestaurantsProductScreen'
import RestaurantsCategoryScreen from './Account/RestaurantsAccount/RestaurantsCategoryScreen'
import RestaurantsOrderScreen from './Account/RestaurantsAccount/RestaurantsOrderScreen'
import RestaurantsProfilScreen from './Account/RestaurantsAccount/RestaurantsProfilScreen'
import RestaurantsPageProductsScreen from './Pages/RestaurantsPageScreen/RestaurantsPageProductsScreen'
import UserPaymentScreen from './Pages/User/UserPaymentScreen/UserPaymentScreen'
import UserAddresScreen from './Pages/User/UserAddresScreen/UserAddresScreen'
import UserOrdersScreen from './Pages/User/UserOrdersScreen/UserOrdersScreen'
import UserSettingsScreen from './Pages/User/UserSettingsScreen/UserSettingsScreen'
import CheckOutPaymentScreen from './Pages/PaymentScreen/PaymentScreen'

//  import SocketScreen from './Components/SocketScreen/SocketScreen'
import ScrollDrowPageScreen from './Components/SocketScreen/ScrollDrown'

import DriverFormScreen from './Pages/DriverFormScreen/DriverFormScreen'
import LocationScreen from './Pages/Home/LoactionScreen/LoactionScreen'
// import Testing from './Testing'
// import SomethingFail from './Pages/SomethingFail/SomethingFail'
// import * as   ActionTypes from './redux/Action/Types'
import SearchingResult from './Components/Update/UseContext/SearchingResult'
import Testing from './test'
import FilterRestarangeProduct from './Components/Update/UseContext/FilterRestarangeProduct'
import NavBar from './Pages/NavBar/NavBar'
import VisaProducts from './Pages/VisaProducts/VisaProducts'
import FilterCategoryScreen from './Components/Update/UseContext/FilterCategoryScreen'
import { FirstNameRest } from './Assistant/Selection'
export default function App() {





  return <ScrollDrowPageScreen>
    <SearchingResult>
      <FilterRestarangeProduct>
        <FilterCategoryScreen>
          <BrowserRouter>



            <NavBar />
            <Route path="/" component={LocationScreen} exact />
            <Route path="/:id/" component={HomeScreen} exact />
            <Route path='/:id/restaurant/:id/' component={RestaurantsPageProductsScreen} exact />


            <Route path="/changepassword/:id" component={ForgetPassword} exact />


            <Route path="/order/shipping/:id/" component={Order} exact />
            <Route path="/test/test/" component={Testing} exact />









            <Route path={`/sw/${FirstNameRest}/work/`} component={ScreenWork} exact />
            <Route path={`/sw/${FirstNameRest}/contact/`} component={ScreenContact} exact />
            <Route path={`/sw/${FirstNameRest}/about/`} component={ScreenAbout} exact />
            <Route path={`/sw/${FirstNameRest}/driver/`} component={DriverFormScreen} exact />

            <Route path="/:id/restaurant/:id/checkout/" component={CheckOutPaymentScreen} exact />








            <Route path="/sw/personal/like/" component={ScreenLike} exact />

            <Route path='/driver/' component={DriverItemsScreen} exact />
            <Route path='/driver/profile/' component={DriverProfile} exact />
            <Route path='/driver/processing/' component={CancalOrder} exact />
            <Route path='/driver/message/' component={ChatScreen} exact />


            <Route path='/sw/restaurants/admin/:id/' component={RestaurantsHomeScreen} exact />
            <Route path='/sw/restaurants/admin/order/:id/' component={RestaurantsOrderScreen} exact />
            <Route path='/sw/restaurants/admin/product/:id/' component={RestaurantsProductScreen} exact />
            <Route path='/sw/restaurants/admin/category/:id/' component={RestaurantsCategoryScreen} exact />
            <Route path='/sw/restaurants/admin/profile/:id/' component={RestaurantsProfilScreen} exact />




  
              <Route path="/sw/profil/personal/" component={UserProfileScreen} exact />
              <Route path="/sw/profil/payment/" component={UserPaymentScreen} exact />
              <Route path="/sw/profil/address/" component={UserAddresScreen} exact />
              <Route path="/sw/profil/orders/" component={UserOrdersScreen} exact />
              <Route path="/sw/profil/settings/" component={UserSettingsScreen} exact />







            <Route path='/:id/:id/' component={VisaProducts} exact />















            <Footer />
          </BrowserRouter>

        </FilterCategoryScreen>
      </FilterRestarangeProduct>
    </SearchingResult>
  </ScrollDrowPageScreen>




}

