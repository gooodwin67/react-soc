import React from 'react';
import './Users.css';
import { Users } from './Users';
import { connect } from 'react-redux';
import { UserFollowAC } from '../../redux/users-reducer';
import { UserUnFollowAC } from '../../redux/users-reducer';
import { SetUsersAC } from '../../redux/users-reducer';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        userFollow: (id) => {
            dispatch(UserFollowAC(id))
        },
        userUnFollow: (id) => {
            dispatch(UserUnFollowAC(id))
        },
        setUsers: (users) => {
            dispatch(SetUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;