import react from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import home from "./components/home.js";
import navbar from "./components/navbar.js";
import footer from "./components/footer.js";
import product from "./components/product.js";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/navbar" component={navbar} />
          <Route path="/footer" component={footer} />
          <Route path="/product" component={product} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
