import React from "react"
import {useParams} from 'react-router-dom'
import {Helmet} from 'react-helmet-async'
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const ParamsPage = ()=>{
    const {imageUrl}= useParams()
    const decodedUrl= decodeURIComponent(imageUrl)
    console.log(decodedUrl)
   // const shareURL = `https://react-share.netlify.app/${imageUrl}`
   //const shareURL = `https://react-share.netlify.app/${imageUrl}`
   const shareURL = window.location.href
   console.log(shareURL)  
    return(
        <div>
           <Helmet>
        <meta property="og:image" content={decodedUrl} />
        <meta name="twitter:image" content={decodedUrl} />
        <meta name="description" content="my own description"/>
      </Helmet>
           <img src={decodedUrl} alt="" /> 
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
    )
}
export default ParamsPage