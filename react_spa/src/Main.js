import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import scripts from './js/flyover-scripts.js'
import logo from './img/logos/text-logo.png';

class Main extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <nav className='navbar is-fixed-top is-light'>
            <div className='navbar-brand'>
              <NavLink className='navbar-item' exact to='/'><img src={logo} alt="Logo" /></NavLink>
              <div className="navbar-burger burger" data-target="mainNavbar">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div id="mainNavbar" className="navbar-menu">
              <div className="navbar-end">
                <NavLink className='navbar-item' exact to='/'>Home</NavLink>
                <NavLink className='navbar-item' to='/contact'>Contact</NavLink>
              </div>
            </div>
          </nav>
          <section className='section'>
            <Route exact path='/' component={Home}/>
            <Route path ='/contact' component={Contact}/>
          </section>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
