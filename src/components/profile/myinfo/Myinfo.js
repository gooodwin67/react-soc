import React from 'react';
import './Myinfo.css'


export class Myinfo extends React.Component {
  render() {
    return (
      
      <React.Fragment>
      <div className = 'content_main_img'>
        <img src = 'https://i.ya-webdesign.com/images/header-vector-decorative-13.png' />
      </div>

      <div className = 'user_info_block'>
        <div className = 'user_info_block_left'>
          <img className = 'user_avatar' src = 'https://pbs.twimg.com/media/C-7fNJnXkAALas-.jpg' />
        </div>
        <div className = 'user_info_block_right'>
          <div className = 'user_name name'><h4>Andrey A.</h4></div>
          <hr />
          <div className = 'user_description'>
            <div><strong>Date of Birth</strong><span> 15 june</span></div>
            <div><strong>City</strong><span> Smolensk</span></div>
            <div><strong>Education</strong><span> SGU</span></div>
            <div><strong>WebSite</strong><span> https://noutparts67.ru</span></div>
          </div>
        </div>
      </div> 
      </React.Fragment>

    )
  }
}
