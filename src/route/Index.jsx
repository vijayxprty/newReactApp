import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import Home from '../container/home';
import Login from '../container/login';



const AppRouter=()=> {
  return (
    <Router>
      <Header />
      <Switch>        
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default AppRouter;