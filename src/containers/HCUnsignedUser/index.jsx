import React from 'react'
// import { HCState } from '../../context/index'
import HCHeader from '../../components/HCHeader/index'
import HCLogin from '../../components/HCLogin/index'
import HCFooter from '../../components/HCFooter/index'
import Unsigned from '../../images/unsigned.png'
import './_HCUnsignedUser.scss'

const HCLanding = props => {
  return (
    <React.Fragment>
      {/* <HCState> */}
      <HCHeader />
      <HCLogin />
      <div className="unsigned-user">
        <div>
          <img src={Unsigned} alt=""/>
        </div>
        <div>
          <div className="us-header"> Oops, looks like you are not signed in</div>
          <div className="us-error">Error: Unauthorized user</div>
          <div className="us-description">
            Login to your account and avoid the headaches of car reselling.
            We have the best dealers from the community who wish to buy your car.
            We will connect with dealers and help you get the best price for your car.
            So you can just sit back and relax while we find the best deal for you.
          </div>
          <div className="us-button">
            <button type="button"> Login </button>
          </div>
          <div className="us-link">
            If you don't have an account yet, <span>register</span> now
          </div>
        </div>
      </div>
      <HCFooter />
      {/* </HCState> */}
    </React.Fragment>
  )
}

export default HCLanding