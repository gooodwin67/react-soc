import React from 'react';
import './Users.css';

export class Users extends React.Component {
    render() {

        return (
            <div className="usersPage">
                {
                    this.props.users.map(el =>
                        <div key={el.id}><img width='50px' height='50px' src={el.avatarurl} /><span>{el.name}</span> <span>{el.status}</span><span>{el.location.country}</span> <span>{el.location.city}</span><br /><div>
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