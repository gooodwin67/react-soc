import React from 'react';
import './Users.css';
import { Users } from './Users';
import { connect } from 'react-redux';
import { UserFollowAC } from '../../redux/users-reducer';
import { UserUnFollowAC } from '../../redux/users-reducer';
import { SetUsersAC } from '../../redux/users-reducer';
import { SetPaginationPageAC } from '../../redux/users-reducer';
import * as axios from 'axios';

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countOnPage}`).then((responce) => {
                this.props.setUsers(responce.data.items, responce.data.totalCount)
            })

        }

    }

    setPaginationPage = (el) => {
        this.props.setPaginationPage(parseInt(el.target.innerText))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el.target.innerText}&count=${this.props.countOnPage}`).then((responce) => {
            this.props.setUsers(responce.data.items, responce.data.totalCount)
        })
    }
    render() {
        return (
            <Users totalCount={this.props.totalCount}
                countOnPage={this.props.countOnPage}
                currentPage={this.props.currentPage}
                userUnFollow={this.props.userUnFollow}
                userFollow={this.props.userFollow}
                setPaginationPage={this.setPaginationPage}
                users={this.props.users} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        countOnPage: state.usersPage.countOnPage,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
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
        setUsers: (users, totalCount) => {
            dispatch(SetUsersAC(users, totalCount))
        },
        setPaginationPage: (page) => {
            dispatch(SetPaginationPageAC(page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)