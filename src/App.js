import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const App = () => {
  const [imageURL, setImageURL] = useState('');

  

  const fetchRandomImage = async () => {
    try {
      const response = await fetch('https://picsum.photos/400');
      const imageSrc = response.url;
      setImageURL(imageSrc);

      
    } catch (error) { 
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRandomImage();
    
  }, []);
 

  const shareURL = "https://react-share.netlify.app/" 

  console.log(imageURL)

  return (
    <div className="app">
      <Helmet>
        <meta property="og:image" content={imageURL} />
        <meta name="twitter:image" content={imageURL} />
        <meta name="description" content="my own description"/>
      </Helmet>
      <img className="image" src={imageURL} alt="Random" />
      <div className="share-buttons">
        <FacebookShareButton url={shareURL}>
          <button>Share on Facebook</button>
        </FacebookShareButton>
        <TwitterShareButton url={shareURL}>  
          <button>Share on Twitter</button>
        </TwitterShareButton>
        <WhatsappShareButton url={shareURL}>
          <button>Share on WhatsApp</button>
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default App;
