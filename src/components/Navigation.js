import React from 'react';
export class Navigation extends React.Component {
  render() {
    return (
      <div>
        <div className='menu'>
          <a>Profile</a>
          <a>Messages</a>
          <a>News</a>
          <a>Music</a>
          <a>Settings</a>
        </div>
      </div>
    );
  }
}
