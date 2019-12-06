import React from 'react';
import UserIcon from '@material-ui/icons/AccountCircle';
import { Divider } from '@material-ui/core';

function Tweet() {
    const tweetStyle = {
        border: '1px solid black',
        margin: '10px',
        width: '50%'
    }
    return (
        <div>
            <div style={tweetStyle}>
                <UserIcon color="disabled" style={{ fontSize: 50 }} />
                <span>
                    박동현
            </span>
                <span>
                    pdh2263
            </span>
            </div>
            <Divider />
        </div>
    );
}

export default Tweet;