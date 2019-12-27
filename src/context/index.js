import React, { useState, createContext } from 'react'
// import { ACCOUNTS_PAGE_HEADER } from 'AccountsConstants/language/account'
import { hcAxiosInstance } from '../utils/index'
// import { SIGN_IN_CHECK_URL, GET_CALL } from 'AccountsConstants/api_endpoints'

export const HCContext = createContext({
  isLoggedIn: false,
  hcLoading: false,
  hcLoadingHandler: () => { },
  howLoginModal: false, 
  toggleLoginModal: () => { },
  user: {},
  ads: [],
  setCurrentUser: () => { },
  hcLoadingFailed: false, 
  hcLoadingFailedHandler: () => { }
})

export const HCState = ({ children }) => {
  const [hcLoading, hcLoadingHandler] = useState(false)
  const [hcLoadingFailed, hcLoadingFailedHandler] = useState(false)
  const [isLoggedIn, updateLogin] = useState(false)
  const [showLoginModal, toggleLoginModal] = useState(false)
  const [showPostModal, togglePostAdModal] = useState(false)
  const [showDetailsModal, toggleDetailsModal] = useState(false)
  const [user, setCurrentUser] = useState({})
  const [ads, updateAds] = useState([])

  const logUserIn = data => {
    hcLoadingHandler(true)
    hcAxiosInstance('http://35.202.64.94:9081/authenticate', 'post', null, data)
      .then(res => {
        hcLoadingHandler(false)
        const localUser = {
          role: res.headers.role,
          id: res.headers.id,
          username: res.headers.username,
          authToken: res.headers.token
        }
        console.log(user)
        setCurrentUser(localUser)
        updateLogin(true)
      })
      .catch(err => {
        hcLoadingHandler(false)
        updateLogin(false)
      })
  }

  const signUpUser = data => {
    hcLoadingHandler(true)
    hcAxiosInstance('http://35.202.64.94:9081/seller', 'post', null, data)
      .then(res => {
        hcLoadingHandler(false)
        updateLogin(true)
        window.location.href = "/seller"
      })
      .catch(err => {
        hcLoadingHandler(false)
        // updateLogin(false)
      })
  }

  const fetchAllAds = () => {
    hcLoadingHandler(true)
    hcAxiosInstance(`/sellers/${user.id}/ads`, 'get', user.authToken)
      .then(res => {
        hcLoadingHandler(false)
        updateAds(res.data)
      })
      .catch(err => {
        hcLoadingHandler(false)
        // updateLogin(false)
      })
  }

  const logoutUser = () => {
    setCurrentUser({})
    window.location.href = window.location.origin + '/'
  }

  return (
    <HCContext.Provider
      value={{
        isLoggedIn,
        hcLoading,
        hcLoadingHandler,
        hcLoadingFailed,
        hcLoadingFailedHandler,
        showLoginModal,
        toggleLoginModal,
        logUserIn,
        showPostModal,
        togglePostAdModal,
        showDetailsModal,
        toggleDetailsModal,
        signUpUser,
        user,
        setCurrentUser,
        logoutUser,
        fetchAllAds,
        ads,
        updateAds
      }}
    >
      {children}
    </HCContext.Provider>
  )
}
