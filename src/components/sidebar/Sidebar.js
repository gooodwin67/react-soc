import React from 'react';
import './Sidebar.css';
import { Navigation } from './navigation/Navigation';
import FriendsBarContainer from './friendsbar/FriendsBarContainer';

export class Sidebar extends React.Component {
  render() {
    return (
      <div className='sidebar'>

        <Navigation />

        <FriendsBarContainer />
      </div>
    );
  }
}
