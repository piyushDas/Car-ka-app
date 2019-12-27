import React, { useContext } from 'react'
import { HCContext } from '../../context/index'
import './_HC_header.scss'
import Logo from '../../images/logo.png'
import UserImg from '../../images/user.png'
import More from '../../images/more.png'

const HCHeader = props => {
  const {
    isLoggedIn,
    user,
    toggleLoginModal
  } = useContext(HCContext)
  const loginUser = () => {
    if(!isLoggedIn){
      toggleLoginModal(true)
    }
  }
  
  return (
    <div className="hc_header">
      <img src={Logo} alt=""/>

      <div className="right-options">
        <div className="user-details" onClick={loginUser}>
          <img src={UserImg} alt=""/>
          <span>{user.username || 'Login/Signup'}</span>
        </div>
        <div className="more">
          <img src={More} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default HCHeader