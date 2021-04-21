import React from "react";
import Header from "./components/Header";
import DailyUpdates from "./components/DailyUpdates";
import AboutUs from "./components/AboutUs";
import BestSeller from "./components/BestSeller";
import Contact from "./components/Contact";
import Products from "./components/Products/Products";
import Footer from "./components/Footer";
import CoffeeCatalogue from "./components/Products/CoffeeCatalogue";
import TeaCatalogue from "./components/Products/TeaCatalogue";
import SnacksCatalogue from "./components/Products/SnackCatalogue";
import InsideProductComponent from "./components/Products/InsideProducts/InsideProductsComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Basket from "./components/Basket";
import { CartProvider } from "./components/Products/CartContext";
import { UserProvider } from "./components/Auth/UserContext";
import NotFound from "./components/NotFound";
import GetYourDiscount from "./components/GetYourDiscount";
import { DiscountProvider } from "./components/GetYourDiscount/DiscountContext";
import AllProductsCatalogue from "./components/Products/AllproductsCatalogue";
import { IsUserProvider } from "./components/Auth/IsUserContext";
import languages from "./settings/Language/index";
import ScrollToTop from "./shared/ScrollToTop";

const lang = "en";

function App() {
  return (
    // <IntlProvider messages={languages[lang]} locale={lang}>
    <div className="container">
      <ScrollToTop />
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
    // </IntlProvider>
  );
}

export default App;
