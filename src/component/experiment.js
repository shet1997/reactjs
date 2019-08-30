import React from 'react';

function ClickFunc() {
    function clickbtn() {
        console.log('button clicked');
    } 

    return (
        <button onClick={clickbtn}>click me</button>
    );
}

export default ClickFunc;