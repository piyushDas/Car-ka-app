import React from 'react'
import './_HCAddItem.scss'
import Audi from '../../images/audi.jpg'
import Variant from '../../images/variant.png'
import Cal from '../../images/calendar.png'
import Speed from '../../images/speed.png'
import DateIcon from '../../images/date.png' 
import Bill from '../../images/bill.png'
import LocationIcon from '../../images/location.png'
import Delete from '../../images/remove.png'
import Edit from '../../images/penedit.png'

const HCSellerAddItem = props => {
  return (
    <div className="hc-seller-ad-item"> 
      <div className="ad-image">
        <img src={Audi} alt=""/>
      </div>
      <div className="ad-description">
        <div className="ad-title">Mahindra XUV500
          <div className="actions">
            <div>
              <img src={Edit} alt=""/>
              <span>Edit</span>
            </div>
            <div>
              <img src={Delete} alt=""/>
              <span>Remove</span>
            </div>
          </div>
        </div>
        <div className="location">
          <img src={LocationIcon} alt=""/>
          <span>Karnataka</span>
        </div>
        <div className="posted-on">
          <img src={DateIcon} alt=""/>
          <span>Posted on:</span>
          <span>12 October, 2019</span>
        </div>
        <div className="ad-comments">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="feature-box">
          <div className="feature-grid">
            <div><img src={Cal} alt=""/></div>
            <div className="tile">
              <div>Since</div>
              <div>2017</div>
            </div>
          </div>
          <div className="feature-grid">
            <div><img src={Speed} alt=""/></div>
            <div className="tile">
              <div>Kms driven</div>
              <div>10212 km</div>
            </div>
          </div>
          <div className="feature-grid">
            <div><img src={Variant} alt=""/></div>
            <div className="tile">
              <div>Variant</div>
              <div>Zxi</div>
            </div>
          </div>
        </div>
        <div className="pricing">
          <img src={Bill} alt=""/>
          <span>Rs 1200000</span>
        </div>
      </div>
    </div>
  )
}

export default HCSellerAddItem