import React from 'react';
import './Myposts.css';
import PostContainer from './post/PostContainer.js';
import { addPostCreator, changePostCreator } from './../../../redux/profile-reducer'

export class Myposts extends React.Component {
  render() {

    let editInput = (el) => {
      this.props.editInput(el.target.value)
    }

    let addPost = () => {
      let posts = this.props.postsElements
      this.props.addPost(posts, this.props.input)
    }

    return (
      <div className='user_posts_block'>
        <h5 className='header_h5'>My posts</h5>
        <div className='new_post_block'>
          <form>
            <textarea onChange={editInput} type='text' name='post' placeholder='Type your post' value={this.props.input} />
            <a onClick={addPost}>Send</a>
          </form>
        </div>

        <div className='all_posts_block'>

          {this.props.postsElements}
        </div>


      </div>




    )
  }
}

export default Myposts;