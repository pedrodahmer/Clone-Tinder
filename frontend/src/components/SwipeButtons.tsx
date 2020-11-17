import React from 'react';

import IconButton from '@material-ui/core/IconButton'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

import '../styles/layout/swipebuttons.css'

function SwipeButtons() {
    return (
        <div className="swipe-btns">
            <IconButton id="btn-undo">
                <ReplayIcon fontSize="large"/>
            </IconButton>

            <IconButton id="btn-dislike">
                <CloseIcon fontSize="large"/>
            </IconButton>

            <IconButton id="btn-superlike">
                <StarRateIcon fontSize="large"/>
            </IconButton>

            <IconButton id="btn-like">
                <FavoriteIcon fontSize="large"/>
            </IconButton>

            <IconButton id="btn-boost">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
        </div>
    );
}

export default SwipeButtons;
