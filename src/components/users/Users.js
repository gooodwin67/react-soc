import React from 'react';
import './Users.css';
import * as axios from 'axios';
import noPhotoMan from '../../../src/images/no-photo-man.png';

export class Users extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then((responce) => {
                this.props.setUsers(responce.data.items)
            })
        }
    }

    render() {

        return (
            <div className="usersPage">
                {
                    this.props.users.map(el =>
                        <div className='flex_users' key={el.id}>
                            {
                                el.avatarurl ? <img width='50px' height='50px' src={el.avatarurl} /> : <img width='50px' height='50px' src={noPhotoMan} />
                            }
                            <span>{el.name}</span><span>{el.status}</span><span>{"el.location.country"}</span> <span>{"el.location.city"}</span><br /><div>
                                {
                                    el.following == true
                                        ?
                                        <button onClick={() => { this.props.userUnFollow(el.id) }}>UnFollow</button>
                                        :
                                        <button onClick={() => { this.props.userFollow(el.id) }}>Follow</button>
                                }
                            </div><br /></div>
                    )
                }
            </div>
        )
    }
}