
import React from "react";
import Navbar from "./Componnent/Navbar";
import './App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from "./Componnent/page/Home";
import Services from "./Componnent/page/Services";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/services' component={Services}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
