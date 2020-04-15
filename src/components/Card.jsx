import React from 'react';

function Card({title, content}) {
  const imgName = title.toLowerCase().split(' ');

  return (
    <div className="card">
      <div className="card-img-container">
        <div className="card-img">
          <img src={`icon-${imgName[0]}-${imgName[1]}.svg`} alt={title}/>
        </div>
      </div>
      <div className="heading">
        {title}
      </div>
      <div className="content">
        {content}
      </div>
    </div>
  );
}

export default Card;