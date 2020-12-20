import './styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./views/Home";
import About from "./views/About";
import Topics from "./views/Topics";
import DetailFaq from "./views/DetailFaq";
import DetailTopic from "./views/DetailTopic";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="App">
     <Router>
      <Nav />
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
        <Route exact path="/topics/:id">
         <DetailTopic />
        </Route>
        <Route path="/topics/:topicId/faqs/:id">
          <DetailFaq />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}