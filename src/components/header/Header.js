import React from 'react';
import './Header.css'
import logo from '../../images/vk.png'
import { NavLink } from 'react-router-dom'


export let Header = (props) => {
  return (
    <div className='header_block'>
      <img className='header_logo' src={logo} />
      <div className='login'>
        {
          props.isAuth ? <NavLink to='/login'>login</NavLink> : <a>{props.data.login}</a>
        }
      </div>
    </div>
  );

}

