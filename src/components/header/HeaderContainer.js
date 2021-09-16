import React from 'react';
import { Header } from './Header';
import { setAuth } from './../../redux/auth-reducer'
import { connect } from 'react-redux'
import axios from 'axios';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true
    })
      .then((response) => {
        //console.log(response.data)
        this.props.setAuth(response.data)
      })
  }
  render() {
    return (
      <Header {...this.props} />
    )
  }
}

let mapStateToProps = (state) => {

  return {
    data: state.auth.data,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, { setAuth })(HeaderContainer);

