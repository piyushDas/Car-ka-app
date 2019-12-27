import React from 'react'
import Loader1 from '../../images/loader1.png'
import Loader2 from '../../images/loader2.png'
import Loader3 from '../../images/loader3.png'
import './_HCLoader.scss'

const HCLanding = props => {
  return (
    <React.Fragment>
      <div className="loader-container">
          <div className="loader-center">
          <img src={Loader1} alt="" className="loader-1"/>
          <img src={Loader2} alt="" className="loader-2"/>
          <img src={Loader3} alt="" className="loader-3"/>
          <div>Please wait...</div>
          </div>
      </div>
    </React.Fragment>
  )
}

export default HCLanding