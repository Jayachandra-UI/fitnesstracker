import React from 'react';  
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import AddScreen from "../ui-Pages/secondScreen"

const routing = (
  <Router>
    <div>
      <h1>React Router Example</h1>
      <Route path="/" component={App} />
      <Route path="/add" component={AddScreen} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);  