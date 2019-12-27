/*
  Entry point of the app
  This is imported in the root element
*/

import React from 'react';
import { withRouter } from 'react-router-dom'
import { HCState } from './context/index'
// import { checkSignIn } from './utils/index'
import Router from './Router'
// import HCHeader from './components/HCHeader/index.jsx'
// import HC_login from './components/HCLogin/index.jsx'
// import HCSeller from './containers/HCSeller/index.jsx'
// import HCBuyer from './containers/HCBuyer/index.jsx'
// import logo from './logo.svg';
// import './App.scss';

const App = props => {
  return (
    <HCLandingView />
  )
}

const HCLandingView = withRouter(props => {
  // const [containerLoaded, containerLoadingHandler] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     containerLoadingHandler(true)
  //   }, 500)
  // })

  // const {
  //   user,
  //   setCurrentUser
  // } = useContext(HCContext)

  // useEffect(() => {
  //   checkSignIn(user, setCurrentUser)
  // }, [])

  let pageView
  if (true) {
    pageView = (
      <Router />
    )
  }
  return (
    <div>
      <HCState>
        {pageView}
      </HCState>
    </div>
  )
})

export default App
