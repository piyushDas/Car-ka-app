import React, { useContext } from 'react'
import './_HCPostAdModal.scss'
import { HCContext } from '../../context/index'
import HeaderImg from '../../images/ad_header.png'
// import Variant from '../../images/variant.png'
// import Cal from '../../images/calendar.png'
// import Speed from '../../images/speed.png'
// import DateIcon from '../../images/date.png' 
// import Bill from '../../images/bill.png'
// import LocationIcon from '../../images/location.png'
// import Delete from '../../images/remove.png'
// import Edit from '../../images/penedit.png'

const HCPostAdModal = props => {
  const {
    showPostModal,
    togglePostAdModal
  } = useContext(HCContext)

  const closeModal = () => {
    togglePostAdModal(false)
  }

  let pageView
  if(showPostModal) {
    pageView = (
        <React.Fragment>
        <div className="hc-overlay" />
        <div className="post-ad-container">
          <div className="post-header">
            <img src={HeaderImg} alt="" />
            <span>Tell us about your car</span>
            <span className="close" onClick={closeModal}>x</span>
          </div>
          <div>
            <div className="one-col">
              <input type="text" />
              <span>Title</span>
            </div>
            <div className="one-col">
              <textarea></textarea>
              <span>Comment</span>
            </div>
            <div className="two-cols">
              <div>
                <input type="text" />
                <span>Brand</span>
              </div>
              <div>
                <input type="text" />
                <span>Model</span>
              </div>
            </div>
            <div className="two-cols">
              <div>
                <input type="text" />
                <span>Variant</span>
              </div>
              <div>
                <input type="text" />
                <span>Year</span>
              </div>
            </div>
            <div className="two-cols">
              <div>
                <input type="text" />
                <span>Price</span>
              </div>
              <div>
                <input type="text" />
                <span>Kms driven</span>
              </div>
            </div>
            <div className="file-upload">
              <input type="file"/>
            </div>
            <div>
              <button type="button">
                Post Ad
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      {pageView}
    </React.Fragment>
  )
}

export default HCPostAdModal