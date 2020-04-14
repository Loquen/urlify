import React from 'react';

function Card({title, content}) {
  return (
    <div>
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