import React from 'react';
import './Users.css';
import noPhotoMan from '../../../src/images/no-photo-man.png';
import Preloader from '../common/Preloader/Preloader';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { usersApi } from '../../api/users-api';

export let Users = (props) => {
    let pages = [];
    let paginationPages = props.totalCount / props.countOnPage
    for (let i = 1; i <= paginationPages; i++) {
        pages.push(i)
    }

    return (
        <div className="usersPage">
            {props.isProgress ? <Preloader /> : null}
            <div className='pagination_block'>
                {
                    pages.map((el) => {
                        return (
                            <span onClick={props.setPaginationPage} key={el} className={props.currentPage === el ? 'pagination-active' : null}>{el}</span>
                        )
                    })
                }
            </div>
            {
                props.users && props.users.map(el =>
                    <div className='flex_users' key={el.id}>
                        <Link to={'/profile/' + el.id}>
                            {
                                el.photos.small ? <img width='50px' height='50px' src={el.photos.small} /> : <img width='50px' height='50px' src={noPhotoMan} />
                            }
                        </Link>
                        <span>{el.name}</span><span>{el.status}</span><span>{"el.location.country"}</span> <span>{"el.location.city"}</span><br /><div>
                            {
                                el.followed == true
                                    ?
                                    <button disabled={props.followingInProgress && true} onClick={() => {
                                        props.setFollowIsProgress(true)
                                        usersApi.unfollow(el.id).then((data) => {
                                            if (data.resultCode == 0) {
                                                props.userUnFollow(el.id)
                                            }
                                            props.setFollowIsProgress(false)
                                        })

                                    }}>UnFollow</button>
                                    :
                                    <button disabled={props.followingInProgress} onClick={() => {
                                        props.setFollowIsProgress(true)
                                        usersApi.follow(el.id).then((data) => {
                                            if (data.resultCode == 0) {
                                                props.userFollow(el.id)
                                            }
                                            props.setFollowIsProgress(false)
                                        })


                                    }}>Follow</button>
                            }
                        </div><br /></div>
                )
            }
        </div >
    )
}