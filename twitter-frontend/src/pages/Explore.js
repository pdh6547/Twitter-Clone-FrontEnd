import React from 'react';
import Divider from '@material-ui/core/Divider/';

function Explore() {

    const style = {
        fontSize: '20px',
        fontWeight: 'bold',
        marginLeft: '10px'
    }

    return (
        <div>
            <p style={style}>탐색하기</p>
            <Divider />
            <div>
                탐색
            </div>
        </div>
    );
};

export default Explore;