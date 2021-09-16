import React from 'react';
import './Profile.css'
import MypostsContainer from './myposts/MypostsContainer.js'
import { Myinfo } from './myinfo/Myinfo.js'


export class Profile extends React.Component {
  render() {
    return (
      <div className='content-wrap'>

        <Myinfo profile={this.props.profile} />
        <MypostsContainer />

      </div>

    );
  }
}
