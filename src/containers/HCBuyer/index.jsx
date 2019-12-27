import React from 'react'
import HCHeader from '../../components/HCHeader/index'
import HCBuyerAdItem from '../../components/HCBuyerAdItem/index'
import HCBuyerFilter from '../../components/HCBuyerFilter/index'
import HCBuyerAdDetails from '../../components/HCBuyerAdDetails/index'
import './_HCBuyer.scss'

const HCBuyer = props => {
  return (
    <React.Fragment>
      <HCHeader />
      <div className="buyers-view">
        <div className="buyer-filter">
          <HCBuyerFilter />
        </div>
        <div className="buyer-items">
          <HCBuyerAdItem />
          <HCBuyerAdItem />
          <HCBuyerAdItem />
          <HCBuyerAdItem />
          <HCBuyerAdItem />
          <HCBuyerAdItem />
        </div>
      </div>
      <HCBuyerAdDetails />
    </React.Fragment>
  )
}

export default HCBuyer