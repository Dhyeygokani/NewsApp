
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
        <Navbar></Navbar>
       
        <Switch>
          <Route path="/"><News pageSize={5} country="in" category="general" ></News> </Route>
          <Route path="/business"><News pageSize={5} country="in" category="Business" ></News> </Route>
          <Route path="/health"><News pageSize={5} country="in" category="Health" ></News> </Route>
          <Route path="/sports"><News pageSize={5} country="in" category="Sports" ></News> </Route>
          <Route path="/science"><News pageSize={5} country="in" category="Science" ></News> </Route>
          <Route path="/technology"><News pageSize={5} country="in" category="Technology" ></News> </Route>
          <Route path="/general"><News pageSize={5} country="in" category="general" ></News> </Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

