import React from 'react';
import './FriendsBar.css';


export class FriendsBar extends React.Component {
  render() {
    return (
      <div className='friendsbar'>
        <h5 className='header_h5'>Friends</h5>
        <div className='friendsbar_block'>
          {this.props.friendsElements}
        </div>
      </div>
    );
  }
}
