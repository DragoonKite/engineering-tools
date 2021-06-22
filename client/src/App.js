import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import 'semantic-ui-css/semantic.min.css';
import Home from "./pages/Home";
import Unit from "./pages/Unit";
import Static from "./pages/Static"
import Nav from "./components/Nav"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/unit" component={ Unit } />
          <Route exact path="/static" component={ Static } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
