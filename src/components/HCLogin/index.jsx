import React, { useContext, useState, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import { HCContext } from '../../context/index'
import './_HC_login.scss'
import secure from '../../images/secure.png'
import deals from '../../images/deals.png'
import key from '../../images/key.png'


const HC_login = props => {
  const {
    showLoginModal,
    toggleLoginModal,
    logUserIn,
    signUpUser,
    isLoggedIn
  } = useContext(HCContext)

  let header = 'Login to your account'
  let buttonText = 'Login'
  // const signUpDescription = ""
  const [isSignup, toggleSignup] = useState(false)
  const [emptyflag, updateEmptyFlag]= useState(false)
  const [userName, updateUserName] = useState('')
  const [password, updatePassword] = useState('')
  const [password2, updatePassword2] = useState('')
  const [address, updateAddress] = useState('')
  const [address2, updateAddress2] = useState('')
  const [phone, updatePhone] = useState('')
  const [phone2, updatePhone2] = useState('')
  const [city, updateCity] = useState('')
  const [pin, updatePin] = useState('')
  const [errorMessage, updateErrorMessage] = useState("Fields marked in red cannot be left empty")

  const resetAllFields = () => {
    updateUserName('')
    updatePassword('')
    updatePassword2('')
    updateAddress('')
    updateAddress2('')
    updatePhone('')
    updatePhone2('')
    updateCity('')
    updatePin('')
  }

  const userNameRef = useRef(null)
  const passwordRef = useRef(null)
  const password2Ref = useRef(null)
  const addressRef = useRef(null)
  const address2Ref = useRef(null)
  const phoneRef = useRef(null)
  const phone2Ref = useRef(null)
  const cityRef = useRef(null)
  const pinRef = useRef(null)

  if (isSignup) {
    header = 'Join Hahacars'
    buttonText = "Sign up"
  }
  const showLoginForm = () => {
    toggleSignup(false)
    resetAllFields()
    updateEmptyFlag(false)
  }
  const showSignupForm = () => {
    toggleSignup(true)
    resetAllFields()
    updateEmptyFlag(false)
  }
  const validateAndSetInput = (val, callback) => {
    callback(val)
  }
  const updateClasses = el => {
    if (el.value){
      el.classList.add("has-value")
      el.classList.remove("error-field")

    } else {
      el.classList.add("error-field")
      el.classList.remove("has-value")
    }
  }

  const setFocus = refEl => () => {
    refEl.current.focus()
  }
  let form
  let actions
  if (isSignup) {
    form = (
      <div className="signup-form">
        <div>
          <input 
            type="text"
            value={userName}
            ref={userNameRef}
            onChange={e => validateAndSetInput(e.target.value, updateUserName)}
            onBlur={e => updateClasses(e.currentTarget)}
          />
          <span className="hover-label" onClick={setFocus(userNameRef)}>Username</span>
        </div>
        <div>
          <input 
            type="password"
            value={password}
            ref={passwordRef}
            onChange={e => validateAndSetInput(e.target.value, updatePassword)}
            onBlur={e => updateClasses(e.currentTarget)}
          />
          <span className="hover-label" onClick={setFocus(passwordRef)}>Password</span>
        </div>
        <div>
          <input 
            type="password"
            value={password2}
            ref={password2Ref}
            onChange={e => validateAndSetInput(e.target.value, updatePassword2)}
            onBlur={e => updateClasses(e.currentTarget)}
          />
          <span className="hover-label" onClick={setFocus(password2Ref)}>Confirm Password</span>
        </div>
        <div>
          <input 
            type="text"
            value={address}
            ref={addressRef}
            onChange={e => validateAndSetInput(e.target.value, updateAddress)}
            onBlur={e => updateClasses(e.currentTarget)}
          />
          <span className="hover-label" onClick={setFocus(addressRef)}>Address</span>
        </div>
        <div>
          <input 
            type="text"
            value={address2}
            ref={address2Ref}
            onChange={e => validateAndSetInput(e.target.value, updateAddress2)}
          />
          <span className="hover-label" onClick={setFocus(address2Ref)}>Address</span>
        </div>
        <div className = "multi-input">
          <input 
            type="text"
            value={city}
            ref={cityRef}
            onChange={e => validateAndSetInput(e.target.value, updateCity)}
            onBlur={e => updateClasses(e.currentTarget)}
          />
          <span className="hover-label" onClick={setFocus(cityRef)}>City</span>
          <input 
            type="text"
            value={phone}
            ref={phoneRef}
            onChange={e => validateAndSetInput(e.target.value, updatePhone)}
            onBlur={e => updateClasses(e.currentTarget)}
          />
          <span className="hover-label" onClick={setFocus(phoneRef)}>Phone</span>
        </div>
        <div className = "multi-input">
          <input 
            type="text"
            value={pin}
            ref={pinRef}
            onChange={e => validateAndSetInput(e.target.value, updatePin)}
            onBlur={e => updateClasses(e.currentTarget)}
          />
          <span className="hover-label" onClick={setFocus(pinRef)}>PIN</span>
          <input 
            type="text"
            value={phone2}
            ref={phone2Ref}
            onChange={e => validateAndSetInput(e.target.value, updatePhone2)}
          />
          <span className="hover-label" onClick={setFocus(phone2Ref)}>Alternate Phone</span>
        </div>
      </div>
    )
    actions = (
      <div className="login-links">
        Already a registered user? <span onClick={showLoginForm}>Sign in</span>
      </div>
    )
  } else {
    form = (
      <React.Fragment>
        <div>
          <input 
            type="text"
            value={userName}
            ref =  {userNameRef}
            onChange={e => validateAndSetInput(e.target.value, updateUserName)}
            onBlur={e => updateClasses(e.currentTarget)}
          />
          <span className="hover-label" onClick={setFocus(userNameRef)}>Username</span>
        </div>
        <div>
          <input
             type="password"
             value={password}
             ref =  {passwordRef}
             onChange={e => validateAndSetInput(e.target.value, updatePassword)}
             onBlur={e => updateClasses(e.currentTarget)}
          />
          <span className="hover-label" onClick={setFocus(passwordRef)}>Password</span>
        </div>
      </React.Fragment>
    )
    actions = (
      <React.Fragment>
        <div className="login-links">
          Forgot password? <span>Click here</span>
        </div>
        <div className="login-links">
          Don't have an account yet? <span onClick={showSignupForm}>Sign up</span>
        </div>
      </React.Fragment>
    )
  }

  const closeLogin = () => {
    toggleLoginModal(false)
    resetAllFields()
  }

  const submitForm = () => {
    const errorFieldCount = document.getElementsByClassName("error-field").length
    const touchedFields = document.getElementsByClassName("has-value").length
    if(errorFieldCount > 0) {
      updateEmptyFlag(true)
    } else if (touchedFields === 0) {
      updateEmptyFlag(true)
      updateErrorMessage("Please fill in your details before you login/signup")
    } else {
      if(isSignup) {
        const payload = {
          username: userName,
          password: password,
          personalInfo:{
            address: `${address} ${address2}`,
            city: city,
            pincode: pin,
            name: userName,
            phoneNumber:[phone, phone2]
          }
        }
        signUpUser(payload)
      } else {
        const payload = {
          username: userName,
          password: password
        }
        logUserIn(payload)
      }
    }
  }
  let modalView
  if (showLoginModal && !isLoggedIn) {
    modalView = (
      <React.Fragment>
        <div className="hc-overlay"/>
          <div className="hc-login-container">
            <div className="left-pane">
              <div>Car becho fatak se!</div>
              <div className="features">
                <img src={key} alt=""/>
                <div>Avoids hassles reselling your car</div>
              </div>
              <div className="features">
                <img src={deals} alt=""/>
                <div>Best deals available at one click</div>
              </div>
              <div className="features">
                <img src={secure} alt=""/>
                <div>Safe and secure</div>
              </div>
            </div>
            <div className="right-pane">
              <span className="close-login" onClick={closeLogin}>x</span>
              <hr />
              <div>
                {header}
              </div>
              {form}
              <div className={ emptyflag ? "error-notification" : "error-notification fade-notification"}>
                {errorMessage}
              </div>
              <div>
                <button type="button" onClick={submitForm}> {buttonText} </button>
              </div>
              {actions}
            </div>
          </div>
      </React.Fragment>
    )
  } else if (isLoggedIn) {
    modalView = (
      <Redirect to='/seller' />
    )
  }

  return (
    <React.Fragment>
      {modalView}
    </React.Fragment>
  )
}

export default HC_login