import React from 'react';
import Post from './Post'
import './Post.css';
import { addLikeCreator, delPostCreator } from '../../../../redux/profile-reducer'
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addLike: (id) => {
      dispatch(addLikeCreator(id));
    },
    delPost: (id) => {
      dispatch(delPostCreator(id));
    }
  }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);

export default PostContainer;

