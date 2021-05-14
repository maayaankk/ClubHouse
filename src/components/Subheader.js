import React from 'react'
import { Link } from 'react-router-dom';
import style from '../style/explore.module.css';

function Subheader(props) {
    return (
        <div className={style.head}>
            <Link to='/home'>
                <img src="/images/arrow.png" />
                <h3>
                    {props.pageTitle}
                </h3>
            </Link>
        </div>

    )
}

export default Subheader
