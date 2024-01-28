import React from 'react';

function Title(props) {
    console.log("rendering Title")
    return (
        <div>

            <h2>Use CallBack Hook</h2>
        </div>
    );
}

export default React.memo(Title);