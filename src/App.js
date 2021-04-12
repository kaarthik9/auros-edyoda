import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import ShopPage from "./Components/ShopPage/ShopPage";
import ProductPage from "./Components/ProductPage/ProductPage";
import CheckoutPage from "./Components/CheckoutPage/CheckoutPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        {/* All Pages */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/product/:productName" component={ProductPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="*" component={() => <div>Page Not Found</div>} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
