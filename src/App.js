import './styles.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from "./views/Home";
import About from "./views/About";
import Topics from "./views/Topics";

export default function App() {
  return (
    <div className="App">
     <Router>

     <Link to="/">Home</Link>
     <Link to="/about" style={{ marginLeft: "10px" }}>
          About
     </Link>
     <Link to="/topics" style={{ marginLeft: '10px' }}>
      Topics
     </Link>

     <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/topics">
          <Topics />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}