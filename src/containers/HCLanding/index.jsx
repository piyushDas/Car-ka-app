import React, { useContext, useEffect } from 'react'
import { HCContext } from '../../context/index'
import HCHeader from '../../components/HCHeader/index'
import HCLogin from '../../components/HCLogin/index'
import HCFooter from '../../components/HCFooter/index'
import HCLoader from '../../components/HCLoader'
import Relax from '../../images/relax.png'
import Login from '../../images/login.png'
import Post from '../../images/post.png'
import './_HCLanding.scss'

const HCLanding = props => {
  const {
    hcLoading,
    hcLoadingFailed,
    // hcLoadingHandler
  } = useContext(HCContext)
  useEffect(() => {
    // hcLoadingHandler(false)
  })
  let pageView
  if(hcLoading && !hcLoadingFailed) {
    pageView = (
      <HCLoader />
    )
  } else  if (!hcLoadingFailed && !hcLoading){
    pageView = (
      <React.Fragment>
        <HCHeader />
        <HCLogin />
        <div className="intro-box" />
        <div className="work-box">
          <div>
            How it works? Simple!
          </div>
          <div className="step-box">
            <div className="work-step">
              <img src={Login} alt="" />
              <div>Login to your account</div>
              <div>
                Sign in to your account. 
                If your don't have one, you can create a new one within a minute
              </div>
            </div>
            <div className="work-step">
              <img src={Post} alt="" />
              <div>Tell us about your car</div>
              <div>
                Just answer a few questions and post your ad instantly. 
                We will connect with dealers and help you get the best price for your car.
              </div>
            </div>
            <div className="work-step">
              <img src={Relax} alt="" />
              <div>That's it, just relax</div>
              <div>
                So you can just sit back and relax while we find the best deal for you.
                Thats it. Simple and hassle-free.
              </div>
            </div>
          </div>
        </div>
        <div className="about-us">
          <div>About Us</div>
        </div>
        <HCFooter />
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      {/* <HCState> */}
      {pageView}
      {/* </HCState> */}
    </React.Fragment>
  )
}

export default HCLanding