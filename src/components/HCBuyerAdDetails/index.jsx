import React from 'react'
import './_HCBuyerAdDetails.scss'
import Audi from '../../images/audi.jpg'
import Cal from '../../images/calendar.png'
import Speed from '../../images/speed.png'
import Variant from '../../images/variant.png'

const HCBuyerAdDetails = props => {
  return (
    <React.Fragment>
      <div className="hc-overlay"/>
      <div className="hc-buyer-details">
        <div className="image-carousel">
          <img src={Audi} alt=""/>
        </div>
        <div>
          <div>
            <div>Audi XUV500</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
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
          </div>
          <div>
            <div>
              Want to buy this car?
            </div>
            <div>
              We will call you back on your registered number
              If you wish to provide a different number
            </div>
            <div>
              <input type="text" />
            </div>
            <div>
              <button type="button">
                Express Interest
              </button>
            </div>
          </div>
        </div>
      </div>  
    </React.Fragment>
  )
}

export default HCBuyerAdDetails