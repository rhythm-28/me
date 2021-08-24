import react from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import home from "./components/home.js";
import productPage from "./components/productPage.js";
import cart from "./components/cart.js";
import VerticalCarousel from "./components/verticalCarousel.js";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/productPage/:productId" component={productPage} />
          <Route path="/cart" component={cart} />
          <Route path="/verticalCarousel" component={VerticalCarousel} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
