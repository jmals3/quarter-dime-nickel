import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Play from './Play'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/play">
          <Play />
        </Route>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
