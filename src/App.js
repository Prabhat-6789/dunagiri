import About from "./components/about";
import Accomodation from "./components/accomodation";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Gallery from "./components/gallery";
import Home from "./components/home";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/aboutUs">
                <About/>
            </Route>
            <Route exact path="/accomodation">
                <Accomodation/>
            </Route>
            <Route exact path="/gallery">
                <Gallery/>
            </Route>
            <Route exact path="/blog">
                <Blog/>
            </Route>
            <Route exact path="/contact">
                <Contact/>
            </Route>
          </Switch>
        </div>
  </Router>
    </div>
  );
}

export default App;
