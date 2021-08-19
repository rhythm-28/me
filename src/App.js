import react from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import home from "./components/home.js";
import navbar from "./components/navbar.js";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/navbar" component={navbar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
