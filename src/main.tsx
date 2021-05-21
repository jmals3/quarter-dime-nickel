import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Router, Route } from 'react-router-dom'
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import Home from './Home'
import Footer from './Footer'
import Play from './Play'
import Blog from './Blog'
import Support from './Support';
import Contact from './Contact'
import Privacy from './Privacy'
import ToS from './ToS'

const trackingId = "G-D8CZ6P8GV5";
ReactGA.initialize(trackingId);

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <div className="main-content">
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/play">
          <Play />
        </Route>
        <Route path="/blog/:article?">
          <Blog />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/Privacy">
          <Privacy />
        </Route>
        <Route path="/tos">
          <ToS />
        </Route>
      </div>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
