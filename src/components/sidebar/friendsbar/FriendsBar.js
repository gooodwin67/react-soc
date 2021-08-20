import React from 'react';
import './FriendsBar.css';
// import { NavLink } from 'react-router-dom';
import { FriendInBar } from './friendinbar/FriendInBar';


export class FriendsBar extends React.Component {
  render() {
    let a = 0;
    let friendsElements = this.props.state.friendsPage.friends.map( (el) => {
      a++;
      if (a < 7) {
        return (
          <FriendInBar name = {el.name} avatar = {el.avatar} key={el.id}/>
        )
      }
    })

    return (
      <div className = 'friendsbar'>
        <h5 className = 'header_h5'>Friends</h5>
        <div className = 'friendsbar_block'>
          { friendsElements }
        </div>
      </div>
    );
  }
}
