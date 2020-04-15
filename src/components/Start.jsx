import React from 'react';

function Start(props) {
  return (
    <div className="start">
      <div className="start-img">
        <img src="illustration-working.svg" alt="woman working"/>
      </div>
      <div className="start-words">
        <div className="start-title">
          More than just shorter links
        </div>
        <div className="start-sub">
          Build your brand’s recognition and get detailed insights 
          on how your links are performing.
        </div>
        <input className="start-button" type="button" value="Get Started"/>
      </div>
    </div>
  );
}

export default Start;