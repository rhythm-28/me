import react from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import home from "./components/home.js";
import productPage from "./components/productPage.js";
import about from "./components/about.js";
import login from "./components/login.js";
import signup from "./components/signup.js";
import forgotPassword from "./components/forgotPassword.js";
import contact from "./components/contact.js";
import addProduct from "./components/addProduct.js";

import topSellingCarousel from "./components/topSellingCarousel.js";
import cart from "./components/cart.js";
import VerticalCarousel from "./components/verticalCarousel.js";

function App() {
  return (
    <div>
      <Router>
        <Switch>
        
          <Route exact path="/" component={home} />
          <Route path="/productPage/:productId" component={productPage} />
          <Route path="/about" component={about} />
          <Route path="/login" component={login} />
          <Route path="/signup" component={signup} />
          <Route path="/forgotPassword" component={forgotPassword} />
          <Route path="/contact" component={contact} />
          <Route path="/admin/addProduct" component={addProduct} />

          <Route path="/topSellingCarousel" component={topSellingCarousel} />
          <Route path="/cart" component={cart} />
          <Route path="/verticalCarousel" component={VerticalCarousel} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
