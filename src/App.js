import './App.css';
import Signin from './component/signin/signin'
import Signup from './component/signup/signup'
import Header from './component/header/header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
        <Signin />
        </Route>
        <Route path="/signup">
        <Signup />
        </Route>
        <Route path="/">
          <Header />
        </Route>
        <Route path="/header">
          <Header />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
