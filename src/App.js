import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {
  Record,
  Home
} from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/account" component={Record}/>
      </Switch>
    </Router>
  );
}

export default App;
