import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

import logo from '../assets/images/tinder-logo.png';

import '../styles/layout/header.css';

function Header(){
    return(
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="profile-icon"/>
            </IconButton>

            <img src={logo} alt="tinderLogo" className="tinder-logo"/>

            <IconButton>
                <ForumIcon fontSize="large" className="messages-icon"/>
            </IconButton>
        </div>
    );
}

export default Header;