import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';


export class Navigation extends React.Component {
  render() {
    return (
      <nav className='nav'>
        <h5 className='header_h5'>Menu</h5>
        <div className='menu'>
          <NavLink className='navlink' to='/profile'>Profile</NavLink>
          <NavLink className='navlink' to='/messages'>Messages</NavLink>
          <NavLink className='navlink' to='/users'>Users</NavLink>
          <NavLink className='navlink' to='/news'>News</NavLink>
          <NavLink className='navlink' to='/music'>Music</NavLink>
          <NavLink className='navlink' to='/settings'>Settings</NavLink>
        </div>
      </nav>
    );
  }
}
