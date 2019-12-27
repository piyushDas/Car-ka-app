import React from 'react'
import './_HCBuyerAdItem.scss'
import Audi from '../../images/audi.jpg'
import Variant from '../../images/variant.png'
import Cal from '../../images/calendar.png'
import Speed from '../../images/speed.png'
import DateIcon from '../../images/date.png' 
// import Bill from '../../images/bill.png'
// import LocationIcon from '../../images/location.png'

const HCBuyerAdItem = props => {
  return (
    <div className="hc-buyer-ad-item"> 
      <div className="ad-image">
        <img src={Audi} alt=""/>
      </div>
      <div className="ad-description">
        <div className="ad-title">Mahindra XUV500</div>
        {/* <div className="location">
          <img src={LocationIcon} alt=""/>
          <span>Karnataka</span>
        </div> */}
        <div className="posted-on">
          <img src={DateIcon} alt=""/>
          <span>Posted on:</span>
          <span>12 October, 2019</span>
        </div>
        {/* <div className="ad-comments">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div> */}
        <div className="feature-box">
          <div>
            <img src={Cal} alt=""/>
            <span> 2017 </span>
          </div>
          <div>
            <img src={Speed} alt=""/>
            <span> 1020 kms </span>
          </div>
          <div>
            <img src={Variant} alt=""/>
            <span> Diesel </span>
          </div>
        </div>
        <div className="pricing">
          <span>Rs 1200000</span>
        </div>
      </div>
    </div>
  )
}

export default HCBuyerAdItem