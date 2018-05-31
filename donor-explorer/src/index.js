import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import {Route, Switch} from 'react-router'

import Login from './containers/Login'
import PrivateRoute from './containers/PrivateRoute'
import SavedDonors from './components/SavedDonors'

import './styles/index.css'
import Register from './components/Register'
// import App from './components/App'
import HomePage from './components/HomePage'
import Search from './components/Search'
import configureStore from './store'
// import registerServiceWorker from './registerServiceWorker'

const history = createHistory()
const store = configureStore(history)

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/search/' component={Search} />
        <Route exact path='/register/' component={Register} />
        <PrivateRoute path='/saveddonors' component={SavedDonors} />
      </Switch>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'))
// registerServiceWorker()
