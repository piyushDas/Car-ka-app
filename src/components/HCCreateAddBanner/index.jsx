import React, { useContext } from 'react'
import { HCContext } from '../../context/index'
import './_HCCreateAdBanner.scss'
import postAd from '../../images/post_add.png'

const HCCreateAddBanner = props => {
  const {
    // showPostModal,
    togglePostAdModal
  } = useContext(HCContext)
  const showCreateAdModal = () => {
    togglePostAdModal(true)
  }
  return (
    <div className="hc-ad-banner"> 
      <div className="ad-banner-content">
        <div>
          Want to sell your car?
        </div>
        <div className="ad-banner-message">
          Fill in a few details, post your ad and your work is done.
          Hahacars will find buyers for you, while you can focus on more important things in life.
          So, what are you waiting for? 
        </div>
        <div>
          <button type="button" onClick={showCreateAdModal}> Post Ad</button>
        </div>
      </div>
      <div className="ad-banner-image">
        <img src={postAd} alt=""/>
      </div>
    </div>
  )
}

export default HCCreateAddBanner