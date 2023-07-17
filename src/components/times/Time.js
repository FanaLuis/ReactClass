import React from 'react';
import "./Times.css"

function gettime() {
    return (new Date().toLocaleTimeString());
  }
console.log(gettime);
const Time = () => {
    return ( 
    <div className='time '>
        <h3>{gettime()}</h3>
    </div>

    );
};

export default Time;