import Help from "./components/Help";
import Home from "./components/Home";
import Cv from "./components/Cv";
import AppBar from "./components/appBar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/help">
          <Help />
        </Route>
        <Route exact path="/cv">
          <Cv />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
