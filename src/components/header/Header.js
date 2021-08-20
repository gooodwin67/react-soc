import React from 'react';
import './Header.css'
import logo from '../../images/vk.png'


export class Header extends React.Component {
  render() {
    return (
      <div><img className = 'header_logo' src = {logo} /></div>
    );
  }
}
