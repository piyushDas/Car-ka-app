import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HCLanding from './containers/HCLanding/index.jsx'
import HCSeller from './containers/HCSeller/index.jsx'
import HCBuyer from './containers/HCBuyer/index.jsx'
import HCUnsignedUser from './containers/HCUnsignedUser/index.jsx'

const router = props => (
  <React.Fragment>
    <Switch>
      <Route exact={true} path="/" component={HCLanding} />
      <Route exact={true} path="/buyer" component={HCBuyer} />
      <Route exact={true} path="/seller" component={HCSeller} />
      <Route exact={true} path="/unsigned" component={HCUnsignedUser} />
      {/* <Route path="*" component={PageNotFound} /> */}
    </Switch>
  </React.Fragment>
)

export default router
