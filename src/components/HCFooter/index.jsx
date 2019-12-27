import React from 'react'
// import { HCContext } from '../../context/index'
import './_HCFooter.scss'
import Fb from '../../images/fb.png'
import Twitter from '../../images/twitter.png'
// import More from '../../images/more.png'

const HCFooter = props => {
//   const {
//     isLoggedIn,
//     toggleLoginModal
//   } = useContext(HCContext)
//   const loginUser = () => {
//     if(!isLoggedIn){
//       toggleLoginModal(true)
//     }
//   }

  return (
    <div className="hc-footer">
      <div>
        <span>
          Policies |
        </span>
        <span>
          Terms and Conditions
        </span>
      </div>
      
      <div>
        Copyright © 2019 Hahacars.in - All Rights Reserved.
      </div>
      <div>
        Write to us - contact@hahacars.in
      </div>
      <div className="sharing">
        <img src={Fb} alt=""/>
        <img src={Twitter} alt=""/>
      </div>
    </div>
  )
}

export default HCFooter