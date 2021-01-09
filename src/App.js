import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import History from './HistorySample';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/info">Info</Link></li>
          <li><Link to="/profiles">프로필</Link></li>
          <li><Link to="/history">History 예제</Link></li>
        </ul>
          <Switch>
          <Route path={["/about", '/info']}>
            <About />
          </Route>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/profiles">
            <Profiles/>
          </Route>
          <Route path="/history">
            <History/>
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
