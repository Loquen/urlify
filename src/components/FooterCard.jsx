import React from 'react';

function FooterCard({data}) {
  return (
    <div className='footer-card'>
      <div className="foot-title">
        {data.heading}
      </div>
      <div className="footer-list">
        {data.links.map((link, key) => <div key={key} className='footer-link'>{link}</div>)}
      </div>
    </div>
  );
}

export default FooterCard;