import React from 'react';
import FooterCard from './FooterCard';
function Footer(props) {
  const cards = [
    {
      heading: 'Features',
      links: [
        'Link Shortening',
        'Branded Links',
        'Analytics'
      ]
    },
    {
      heading: 'Resources',
      links: [
        'Blog',
        'Developers',
        'Analytics'
      ]
    },
    {
      heading: 'Company',
      links: [
        'About',
        'Our Team',
        'Careers',
        'Contact'
      ]
    }
  ]

  return (
    <div className="footer">
      <div className="footer-logo">
        <img src="logo.svg" alt="Shortly Logo"/>
      </div>
      <FooterCard 
        key={1}
        data={cards[0]}
      />
      <FooterCard 
        key={2}
        data={cards[1]}
      />
      <FooterCard 
        key={3}
        data={cards[2]}
      />

      <div className="attribution">
        Coded by <a href="https://www.loquenjones.com">Loquen Jones</a>.
      </div>
    </div>
  );
}

export default Footer;