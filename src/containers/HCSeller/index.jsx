import React, { useEffect, useContext } from 'react'
import { HCContext } from '../../context/index'
import HCHeader from '../../components/HCHeader/index'
import HCCreateAddBanner from '../../components/HCCreateAddBanner'
import HCSellerAddItem from '../../components/HCSellerAdItem'
import HCFooter from '../../components/HCFooter/index'
import HCPostAdModal from '../../components/HCPostAdModal'
// import HCLoader from '../../components/HCLoader'
import NoAds from '../../images/no_ads.png'
import './_HCSeller.scss'

const HCSeller = props => {
  const {
    fetchAllAds,
    // user,
    isLoggedIn
    // ads
  } = useContext(HCContext)
  useEffect(() => {
    if (isLoggedIn) {
      fetchAllAds()
    }
  }, [isLoggedIn])
  const items = []
  let listingsView
  if(items && items.length) {
    listingsView = (
      items.map(()=>(
        <HCSellerAddItem />
      ))
    )
  } else {
    listingsView = (
      <React.Fragment>
        <div className="empty-list">
           <div className="empty-message-header">
            Oops! Looks like your ad is not out there
          </div>
          <hr />
          <img src={NoAds} alt=""/>
          <div className="empty-message">
            To get started, create an ad instantly and
            we will connect with dealers and help you get the best price for your car. 
          </div>
        </div>
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      {/* <HCState> */}
      <HCHeader />
      <HCCreateAddBanner />
      <HCPostAdModal />
      <div className="section-header">
        My listings
      </div>
      {listingsView}
      <HCFooter />
      {/* </HCState> */}
    </React.Fragment>
  )
}

export default HCSeller