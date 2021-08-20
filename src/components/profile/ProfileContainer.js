import React from 'react';
import './Profile.css'
import Myposts from './myposts/Myposts.js'
import { Myinfo } from './myinfo/Myinfo.js'


export class ProfileContainer extends React.Component {
  render() {

    return (
      <div className='content-wrap'>

        <Myinfo />
        <Myposts store={this.props.store} />

      </div>

    );
  }
}
