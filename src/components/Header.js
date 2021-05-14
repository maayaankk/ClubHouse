import React from 'react'
import { Link } from 'react-router-dom';
import style from '../style/header.module.css';

function Header() {
    return (
        <div className={style.header}>
            <Link exact to='/explore'>
                <img src='/images/search.png' />
            </Link>
            <div className={style.nav_items}>
                <Link exact to='/friends_invite'>
                    <img src='/images/invite.png' />
                </Link>
                <Link exact to='/upcoming'>
                    <img src='/images/calendar.png' />
                </Link>
                <Link exact to='/activity'>
                    <img src='/images/noti.png' />
                </Link>
                <Link exact to='/profile'>
                    <img src='/images/profile.jfif' style={{ borderRadius: '0.75rem' }} />
                </Link>
            </div>
        </div>
    )
}

export default Header
