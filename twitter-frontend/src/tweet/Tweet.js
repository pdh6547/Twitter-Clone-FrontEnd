import React from 'react';
import Divider from '@material-ui/core/Divider/';

function Tweet() {

    const style = {
        fontSize: '20px',
        fontWeight: 'bold',
        marginLeft: '10px'
    }

    return (
        <div>
            <p style={style}>트윗</p>
            <Divider />
            <div>
                트윗
            </div>
        </div>
    );
};

export default Tweet;