import React from 'react';
import './Myposts.css';
import Myposts from './Myposts';
import PostContainer from './post/PostContainer.js';
import { addPostCreator, changePostCreator } from '../../../redux/profile-reducer'
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    postsElements: state.profilePage.posts.slice(0).reverse().map((el) => <PostContainer id={el.id} text={el.text} likes={el.likes} ilike={el.ilike} key={el.id} likeClass={el.likeClass} />),
    input: state.profilePage.input,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    editInput: (value) => {
      dispatch(changePostCreator(value))
    },
    addPost: (posts, input) => {
      let lastId;
      if (posts.length > 0) lastId = posts[0].props.id + 1;
      else lastId = 1;
      dispatch(addPostCreator(input, lastId))
    }
  }
}

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts)


export default MypostsContainer;