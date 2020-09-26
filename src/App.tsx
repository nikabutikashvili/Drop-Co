import React from "react";
import PopUp from "./PopUp";
import Header from "./components/Header/Header";
import DailyUpdates from "./components/DailyUpdates/DailyUpdates";
import AboutUs from "./components/AboutUs/AboutUs";
import BestSeller from "./components/BestSeller/BestSeller";
import Contact from "./components/Contact/Contact";
import Products from "./components/Products/Products";
import Login from "./components/Header/LoginForm";
import SignUp from "./components/Header/SingUp";
import Footer from "./components/Footer/Footer";
import CoffeeCatalogue from "./components/Products/CoffeeCatalogue";
import TeaCatalogue from "./components/Products/TeaCatalogue";
import SnacksCatalogue from "./components/Products/SnacksCatalogue";
import InsideProductComponent from "./components/Products/InsideProducts/InsideProductsComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Basket from "./components/Basket/Basket";
import { CartProvider } from "./components/Products/CartContext";
import { UserProvider } from "./components/Header/UserContext";
import NotFound from "./components/NotFound/NotFound";
import GetYourDiscount from "./components/GetYourDiscount/GetYourDiscount";
import { DiscountProvider } from "./components/GetYourDiscount/DiscountContext";
import AllProductsCatalogue from "./components/Products/AllproductsCatalogue";
import { IsUserProvider } from "./components/Header/IsUserContext";
function App(props: any) {
  return (
    <div className="container">
      {/* <PopUp /> */}
      <CartProvider>
        <UserProvider>
          <IsUserProvider>
            <DiscountProvider>
              <Header />
              <Switch>
                <Route exact path="/">
                  <DailyUpdates />
                  <BestSeller />
                  <AboutUs />
                </Route>
                <Route path="/contact" component={Contact} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/getyourdiscount" component={GetYourDiscount} />
                <Route
                  path="/products/:id"
                  component={InsideProductComponent}
                />
                <Route path="/products" component={Products} />
                <Route path="/login" component={Login} />
                <Route path="/singup" component={SignUp} />
                <Route path="/coffeecatalogue" component={CoffeeCatalogue} />
                <Route path="/teacatalogue" component={TeaCatalogue} />
                <Route path="/snackscatalogue" component={SnacksCatalogue} />
                <Route
                  path="/allproductscatalogue"
                  component={AllProductsCatalogue}
                />
                <Route path="/basket" component={Basket} />
                <Route path="/not-found" component={NotFound} />
                <Redirect to="/not-found" />
              </Switch>
            </DiscountProvider>
          </IsUserProvider>
        </UserProvider>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
