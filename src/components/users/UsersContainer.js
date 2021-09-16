import React from 'react';
import './Users.css';
import { Users } from './Users';
import { connect } from 'react-redux';
import { userFollow } from '../../redux/users-reducer';
import { userUnFollow } from '../../redux/users-reducer';
import { setUsers } from '../../redux/users-reducer';
import { setPaginationPage } from '../../redux/users-reducer';
import { setIsProgress } from '../../redux/users-reducer';
import { usersApi } from '../../api/users-api';
import { setFollowIsProgress } from '../../redux/users-reducer';

class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.setIsProgress(true)
        usersApi.getUsers(this.props.currentPage, this.props.countOnPage)
            .then((data) => {
                this.props.setUsers(data.items, data.totalCount)
                this.props.setIsProgress(false)
            })



    }

    setPaginationPage = (el) => {
        this.props.setPaginationPage(parseInt(el.target.innerText))
        this.props.setIsProgress(true)
        usersApi.getUsers(el.target.innerText, this.props.countOnPage).then((data) => {
            this.props.setUsers(data.items, data.totalCount)
            this.props.setIsProgress(false)
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
                users={this.props.users}
                isProgress={this.props.isProgress}
                followingInProgress={this.props.followingInProgress}
                setFollowIsProgress={this.props.setFollowIsProgress} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        countOnPage: state.usersPage.countOnPage,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isProgress: state.usersPage.isProgress,
        followingInProgress: state.usersPage.followingInProgress
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        userFollow,
        userUnFollow,
        setUsers,
        setPaginationPage,
        setIsProgress
    }
}*/

export default connect(mapStateToProps, {
    userFollow,
    userUnFollow,
    setUsers,
    setPaginationPage,
    setIsProgress,
    setFollowIsProgress
})(UsersContainer)