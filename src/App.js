import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/index';
import Otc from './pages/otc';
import ScrollToTop from './components/ScrollToTop';
import Capital from './pages/capital'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Route path="/" exact  component={Home}></Route>
      <Route path="/otc" exact component={Otc}></Route>
      <Route path='/capital' exact component={Capital}></Route>
    </Router>
  );
}

export default App;
