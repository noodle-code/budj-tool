import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {
  Record,
  Home,
  Accounts
} from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/accounts/:account_id" component={Record}/>
        <Route exact path="/accounts" component={Accounts}/>
      </Switch>
    </Router>
  );
}

export default App;
