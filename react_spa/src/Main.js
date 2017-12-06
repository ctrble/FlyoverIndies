import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

class Main extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <h1>Flyover Indies</h1>
          <nav className='navbar is-fixed-top'>
            <NavLink className='navbar-item' exact to='/'>Home</NavLink>
            <NavLink className='navbar-item' to='/about'>About</NavLink>
            <NavLink className='navbar-item' to='/contact'>Contact</NavLink>
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
