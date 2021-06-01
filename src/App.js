import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout.js';

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
      <Header />
        <Switch>
          {/* Checkout Root Path */}
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/* Home Root Path Note: Default root must be at bottom  */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
