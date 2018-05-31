import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Axios from 'axios'
import jwtDecode from 'jwt-decode'

import Register from './Register'
import HomePage from './HomePage'
import Search from './Search'
import Login from '../containers/Login'
import PrivateRoute from '../containers/PrivateRoute'
import SavedDonors from './SavedDonors'
import Header from './Header'

import {CLIENT_URL} from '../constants/constants'

class App extends Component {
  constructor () {
    super()
    this.state = {
      accessToken: null,
      refreshToken: null,
      accessExp: null,
      userId: null,
      errors: {},
      isAuthenticated: false
    }
    this.logIn = this.logIn.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  logIn (username, password) {
    Axios({
      method: 'post',
      url: `${CLIENT_URL}api/auth/token/obtain`,
      data: {
        username: username,
        password: password
      }
    }).then(res => {
      console.log('success')
      console.log(res)
      this.setState({
        accessToken: res.data.access,
        refreshToken: res.data.refresh,
        accessExp: jwtDecode(res.data.access).exp,
        userId: jwtDecode(res.data.access).user_id
      })
    })
  }

  isAuthenticated () {
    if (1000 * this.state.accessExp - new Date().getTime() >= 0) {
      return true
    } else {
      return false
    }
  }

  render () {
    return (
      <div>
        <Router>
          <div>
            <Header isAuthenticated={this.isAuthenticated} />
            <Switch>
              <Route
                path='/'
                exact
                render={props => (
                  <HomePage
                    {...props}
                    isAuthenticated={this.isAuthenticated} />
                )}
              />
              <Route
                path='/login'
                exact
                render={props => (
                  <Login
                    {...props}
                    isAuthenticated={this.isAuthenticated}
                    logIn={this.logIn} />
                )}
              />
              <Route
                path='/search'
                exact
                render={props => {
                  return (
                    <Search
                      {...props}
                      isAuthenticated={this.isAuthenticated}
                    />
                  )
                }}
              />
              <Route
                path='/register'
                exact
                render={props => (
                  <Register {...props} isAuthenticated={this.isAuthenticated} />
                )}
              />
              <PrivateRoute exact path='/saveddonors' component={SavedDonors} isAuthenticated={this.isAuthenticated()} />
              <Route path='/*' render={() => <Redirect to='/' />} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
