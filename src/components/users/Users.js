import React from 'react';
import './Users.css';
import noPhotoMan from '../../../src/images/no-photo-man.png';

export let Users = (props) => {
    let pages = [];
    let paginationPages = props.totalCount / props.countOnPage
    for (let i = 1; i <= paginationPages; i++) {
        pages.push(i)
    }
    return (
        <div className="usersPage">
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
                props.users.map(el =>
                    <div className='flex_users' key={el.id}>
                        {
                            el.photos.small ? <img width='50px' height='50px' src={el.photos.small} /> : <img width='50px' height='50px' src={noPhotoMan} />
                        }
                        <span>{el.name}</span><span>{el.status}</span><span>{"el.location.country"}</span> <span>{"el.location.city"}</span><br /><div>
                            {
                                el.following == true
                                    ?
                                    <button onClick={() => { props.userUnFollow(el.id) }}>UnFollow</button>
                                    :
                                    <button onClick={() => { props.userFollow(el.id) }}>Follow</button>
                            }
                        </div><br /></div>
                )
            }
        </div>
    )
}