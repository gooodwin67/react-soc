import React from 'react';
import './Profile.css'
import { Profile } from './Profile';
import { connect } from 'react-redux';
import axios from 'axios';

import { setUsers } from './../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2

    }
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId, {
      withCredentials: true
    }).then((response) => {
      this.props.setUsers(response.data)
    })
  }

  render() {

    return (
      <div className='content-wrap'>

        <Profile {...this.props} />

      </div>

    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

let GetUrlIdContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUsers })(GetUrlIdContainer)
