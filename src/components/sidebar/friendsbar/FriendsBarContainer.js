import React from 'react';
import './FriendsBar.css';
import { FriendsBar } from './FriendsBar';
import { FriendInBar } from './friendinbar/FriendInBar';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    friendsElements: state.sidebarPage.friendsPage.friends.map((el, i) => {
      if (i < 6) {
        return (
          <FriendInBar name={el.name} avatar={el.avatar} key={el.id} />
        )
      }
    })
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    null: null
  }
}


const FriendsBarContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsBar);

export default FriendsBarContainer;