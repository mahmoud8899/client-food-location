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
import ScrollDrowPageScreen from './Components/SocketScreen/ScrollDrown'
import DriverFormScreen from './Pages/DriverFormScreen/DriverFormScreen'
import LocationScreen from './Pages/Home/LoactionScreen/LoactionScreen'
import SearchingResult from './Components/Update/UseContext/SearchingResult'
import FilterRestarangeProduct from './Components/Update/UseContext/FilterRestarangeProduct'
import VisaProducts from './Pages/VisaProducts/VisaProducts'
import FilterCategoryScreen from './Components/Update/UseContext/FilterCategoryScreen'
import { FirstNameRest } from './Assistant/Selection'
import HomeDriver from './Account/DriverAccount/DriverScreen/HomeDriver'
import HomeDriverProfile from './Account/DriverAccount/DriverProfile/HomeDriverProfile'
import HomeDriverMessage from './Account/DriverAccount/MessageChat/HomeDriverMessage'
import HomeCancelDriver from './Account/DriverAccount/DriverScreen/HomeCancelDriver'
import SearchingHome from './Components/Update/UseContext/SearchingHome'
import NavBar from './Pages/NavBar/NavBar'
import Testing from './test'


export default function App() {




  // scroll dwon restrant product class name  ScrollDrowPageScreen
  // searching products class name  SearchingResult
  // sort itemscart between restrants class name  FilterRestarangeProduct
  // filter category to all restrants Home class name  FilterCategoryScreen
  // searching restrang class name  SearchingHome



  return <ScrollDrowPageScreen>
    <SearchingResult>
      <FilterRestarangeProduct>
        <FilterCategoryScreen>
          <SearchingHome>
            <BrowserRouter>


              <NavBar />


              <Route path="/" component={LocationScreen} exact />
              <Route path="/:id/" component={HomeScreen} exact />
              <Route path='/:id/:id/:id/' component={RestaurantsPageProductsScreen} exact />


              <Route path="/sw/password/changepassword/:id" component={ForgetPassword} exact />
              <Route path="/sw/order/shipping/:id/" component={Order} exact />


              <Route path="/test/test/" component={Testing} exact />

              <Route path={`/sw/mig/${FirstNameRest}/work/`} component={ScreenWork} exact />
              <Route path={`/sw/mig/${FirstNameRest}/contact/`} component={ScreenContact} exact />
              <Route path={`/sw/mig/${FirstNameRest}/about/`} component={ScreenAbout} exact />
              <Route path={`/sw/mig/${FirstNameRest}/driver/`} component={DriverFormScreen} exact />

              <Route path="/sw/personal/like/" component={ScreenLike} exact />

              <Route path="/:id/restaurant/:id/checkout/" component={CheckOutPaymentScreen} exact />










              <Route path='/sw/driver/online/driver/' component={HomeDriver} exact />
              <Route path='/sw/driver/online/driver/profile/' component={HomeDriverProfile} exact />
              <Route path='/sw/driver/online/driver/processing/' component={HomeCancelDriver} exact />
              <Route path='/sw/driver/online/driver/message/' component={HomeDriverMessage} exact />





              <Route path='/sw/restaurants/admin/notification/' component={RestaurantsHomeScreen} exact />
              <Route path='/sw/restaurants/admin/order/' component={RestaurantsOrderScreen} exact />
              <Route path='/sw/restaurants/admin/product/' component={RestaurantsProductScreen} exact />
              <Route path='/sw/restaurants/admin/category/' component={RestaurantsCategoryScreen} exact />
              <Route path='/sw/restaurants/admin/profile/' component={RestaurantsProfilScreen} exact />



              <Route path="/sw/fex/profil/personal/" component={UserProfileScreen} exact />
              <Route path="/sw/fex/profil/payment/" component={UserPaymentScreen} exact />
              <Route path="/sw/fex/profil/address/" component={UserAddresScreen} exact />
              <Route path="/sw/fex/profil/orders/" component={UserOrdersScreen} exact />
              <Route path="/sw/fex/profil/settings/" component={UserSettingsScreen} exact />













              <Route path='/:id/:id/' component={VisaProducts} exact />



              <Footer />


            </BrowserRouter>
          </SearchingHome>


        </FilterCategoryScreen>
      </FilterRestarangeProduct>
    </SearchingResult>
  </ScrollDrowPageScreen>






}

