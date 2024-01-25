import React, {useEffect, useState} from 'react';

function MouseMoveHook(props) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(()=>{
        console.log("effect run")
        window.addEventListener("mousemove", (e) => {
            setX( e.clientX);
           setY( e.clientY);
        })
    },[])
    return (
        <div>

        <h2>mouse move {x} and y is {y}</h2>


        </div>
    );
}

export default MouseMoveHook;