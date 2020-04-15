import React, {useState} from 'react';

function Url(props) {
  let [link, setLink] = useState('Shorten a link here...')

  const handleChange = (e) => {
    setLink(e.target.value);
  }

  const handleSubmit = async () => {
    // Here we want to actually POST to the rel.ink link
    const url = 'https://rel.ink/api/links/';

    shortenURL(url, {url: link})
    .then((res) => {
      console.log(res);
    })
  }

  const shortenURL = async (url, data) => {
    let res = await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return res.json();
  }

  return (
    <div className="url">
      <div className='url-form'>
        <input onChange={handleChange} type="text" placeholder={link}/>
        <input onClick={handleSubmit} type="button" value="Shorten It!"/>
      </div>
    </div>
  );
}

export default Url;