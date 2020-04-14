import React from 'react';
import Card from './Card';

function Stats(props) {
  return (
    <div className='stats'>
      <div className="title">
        Advanced Statistics
      </div>
      <div className="stats-sub">
        Track how your links are performing across the web with our 
        advanced statistics dashboard.
      </div>
      <Card 
        title='Brand Recognition'
        content='Boost your brand recognition with each click. Generic links don’t 
        mean a thing. Branded links help instil confidence in your content.'
      />
      <Card 
        title='Detailed Records'
        content='Gain insights into who is clicking your links. Knowing when and where 
        people engage with your content helps inform better decisions.'
      />
      <Card 
        title='Fully Customizable'
        content='Improve brand awareness and content discoverability through customizable 
        links, supercharging audience engagement.'
      />
      
    </div>
  );
}

export default Stats;