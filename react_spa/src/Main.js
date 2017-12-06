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
import logo from './img/text-logo.png';

class Main extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <h1>Flyover Indies</h1>
          <nav className='navbar is-fixed-top'>

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
                <NavLink className='navbar-item' to='/about'>About</NavLink>
                <NavLink className='navbar-item' to='/contact'>Contact</NavLink>
              </div>
            </div>

          </nav>
          <div className='content'>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path ='/contact' component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
