import React from 'react';
import './Sidebar.css';
import { Navigation } from './navigation/Navigation';
import { FriendsBar } from './friendsbar/FriendsBar';

export class Sidebar extends React.Component {
  render() {
    return (
      <div className = 'sidebar'>
        
        <Navigation />
        {/*}
        <FriendsBar state = {this.props.state}/>
    */}
      </div>
    );
  }
}
