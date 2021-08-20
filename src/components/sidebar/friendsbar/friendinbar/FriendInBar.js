import React from 'react';
import './FriendInBar.css';
// import { NavLink } from 'react-router-dom';


export class FriendInBar extends React.Component {
  render() {
    
    return (
      <div className = 'friends_in_bar'>
        <img src = {this.props.avatar} />
        <a>{this.props.name}</a>
      </div>
    );
  }
}
