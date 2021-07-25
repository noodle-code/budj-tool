import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {
  Record,
  Home,
  Accounts,
  AccountForm
} from './pages';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/accounts" component={Accounts}/>
        <Route exact path="/accounts/create" component={AccountForm}/>
        <Route exact path="/accounts/:account_id" component={Record}/>
      </Switch>
    </Router>
  );
}

export default App;
