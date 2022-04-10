import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserProfileScreen from './Pages/User/UserProfileScreen/UserProfileScreen'
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
// import LocationScreen from './Pages/Home/LoactionScreen/LoactionScreen'
import SearchingResult from './Components/Update/UseContext/SearchingResult'
import FilterRestarangeProduct from './Components/Update/UseContext/FilterRestarangeProduct'
import VisaProducts from './Pages/VisaProducts/VisaProducts'
import FilterCategoryScreen from './Components/Update/UseContext/FilterCategoryScreen'
import HomeDriver from './Account/DriverAccount/DriverScreen/HomeDriver'
import SearchingHome from './Components/Update/UseContext/SearchingHome'
import { FirstNameRest } from './Assistant/Selection'
import HomeScreen from './Pages/Home/HomeScreen'
import NavBar from './Pages/NavBar/NavBar'
import Order from './Pages/Order/Order'
import ScreenLike from './Pages/Like/Like'
// import Footer from './Pages/Footer/Footer'
import HomePage from './Pages/SomethingFail/SomethingFail'
import LocationPage from './Pages/LoactionPage/LoactionPage';
import SearchingPage from './Pages/SearchingPage/SearchingPage';
import ChooseAnotherLocation from './Pages/LoactionPage/ChooseAnotherLocation'

// <Route path="/" component={Testing} exact />

export default function App() {

  // location User
  //  onther location selection from user class name 
  // scroll dwon restrant product class name  ScrollDrowPageScreen ChooseAnotherLocation
  // searching products class name  SearchingResult
  // sort itemscart between restrants class name  FilterRestarangeProduct
  // filter category to all restrants Home class name  FilterCategoryScreen
  // searching restrang class name  SearchingHome


  return <Router>

    <LocationPage >
      <ChooseAnotherLocation>
        <ScrollDrowPageScreen>
          <SearchingResult>
            <FilterRestarangeProduct>
              <FilterCategoryScreen>
                <SearchingHome >

                  <NavBar />
                  <Switch>






                    <Route path="/" component={HomeScreen} exact />
                    <Route path='/:id/:id/' component={VisaProducts} exact />
                    <Route path='/:id/:id/:id/' component={RestaurantsPageProductsScreen} exact />

                    <Route path="/sw/password/changepassword/:id" component={ForgetPassword} exact />
                    <Route path="/sw/order/shipping/:id/" component={Order} exact />
                    <Route path={`/sw/mig/${FirstNameRest}/work/`} component={ScreenWork} exact />
                    <Route path={`/sw/mig/${FirstNameRest}/contact/`} component={ScreenContact} exact />
                    <Route path={`/sw/mig/${FirstNameRest}/about/`} component={ScreenAbout} exact />
                    <Route path={`/sw/mig/${FirstNameRest}/driver/`} component={DriverFormScreen} exact />
                    <Route path="/sw/personal/like/" component={ScreenLike} exact />
                    <Route path="/:id/restaurant/:id/checkout/" component={CheckOutPaymentScreen} exact />
                    <Route path='/sw/fex/signup/driver/' component={DriverFormScreen} exact />


                    <Route path='/sw/driver/online/driver/' >
                      <HomeDriver />
                    </Route>


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

                    <Route path="/sw/filter/result/:id/" component={SearchingPage} exact />
                    <Route path="*" exact={true} component={HomePage} />

                  </Switch>
                


                </SearchingHome>


              </FilterCategoryScreen>
            </FilterRestarangeProduct>
          </SearchingResult>
        </ScrollDrowPageScreen>

      </ChooseAnotherLocation>

    </LocationPage>

  </Router>




}

//     <Footer />

//         <Route path="/" component={MAPSTESTING} exact />