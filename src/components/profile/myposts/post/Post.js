import React from 'react';
import './Post.css';




export class Post extends React.Component {
  render() {

    let addLike = () => {
      this.props.addLike(this.props.id);
    }

    let delPost = () => {
      this.props.delPost(this.props.id);
    }

    return (

      <div className='post'>
        <div className='post_avatar post_left'><img className='post_user_avatar' src='https://pbs.twimg.com/media/C-7fNJnXkAALas-.jpg' /></div>
        <div className='post_right'>
          <span className='close' onClick={delPost}>x</span>
          <div className='post_name'><h4>Andrey A.</h4></div>
          <div className='post_text'>
            <span>
              {this.props.text}
            </span>
          </div>
          <div className='post_btns'>

            <span><a onClick={addLike}>
              <span className={'like_icon ' + this.props.likeClass}> </span>


              <strong>{this.props.likes ? this.props.likes : ''}</strong>

            </a></span>

          </div>
        </div>
      </div>

    )
  }
}

export default Post;