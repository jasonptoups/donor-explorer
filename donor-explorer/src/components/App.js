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
import Header from './Header'

import LoginContainer from '../containers/LoginContainer'
import SavedDonorsContainer from '../containers/SavedDonorsContainer'
import LogOutContainer from '../containers/LogOutContainer'

import {CLIENT_URL} from '../constants/constants'

class App extends Component {
  constructor () {
    super()
    this.state = {
      accessToken: null,
      refreshToken: null,
      userId: null,
      loginModalIsOpen: false
    }
    this.logIn = this.logIn.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.logOut = this.logOut.bind(this)
    this.openLoginModal = this.openLoginModal.bind(this)
    this.closeLoginModal = this.closeLoginModal.bind(this)
  }

  logIn (username, password) {
    this.openLoginModal()
    Axios({
      method: 'post',
      url: `${CLIENT_URL}api/auth/token/obtain`,
      data: {
        username: username,
        password: password
      }
    }).then(res => {
      this.setState({
        loginModalIsOpen: false,
        accessToken: res.data.access,
        refreshToken: res.data.refresh,
        userId: jwtDecode(res.data.access).user_id
      })
      sessionStorage.setItem('accessToken', res.data.access)
      sessionStorage.setItem('refreshToken', res.data.refresh)
    })
  }

  openLoginModal () {
    this.setState({loginModalIsOpen: true})
  }

  closeLoginModal () {
    this.setState({loginModalIsOpen: false})
  }

  logOut () {
    sessionStorage.removeItem('accessToken')
    sessionStorage.removeItem('refreshToken')
    this.setState({
      accessToken: null,
      refreshToken: null,
      userId: null
    })
  }

  isAuthenticated () {
    if (this.state.accessToken === null) return false
    if (1000 * jwtDecode(this.state.accessToken).exp - new Date().getTime() >= 0) {
      return true
    } else {
      return false
    }
  }

  componentDidMount () {
    let accessToken = sessionStorage.getItem('accessToken')
    let refreshToken = sessionStorage.getItem('refreshToken')
    if (!accessToken || accessToken === '') {
      accessToken = null
      refreshToken = null
    } else {
      this.setState({
        accessToken: accessToken,
        refreshToken: refreshToken,
        userId: jwtDecode(accessToken).user_id
      })
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
                path='/donor-explorer/'
                exact
                render={props => (
                  <HomePage
                    {...props}
                    isAuthenticated={this.isAuthenticated} />
                )}
              />
              <Route
                path='/donor-explorer/login'
                exact
                render={props => (
                  <LoginContainer
                    {...props}
                    isAuthenticated={this.isAuthenticated}
                    logIn={this.logIn}
                    openLoginModal={this.openLoginModal}
                    closeLoginModal={this.closeLoginModal}
                    loginModalIsOpen={this.state.loginModalIsOpen}
                  />
                )}
              />
              <Route
                path='/donor-explorer/search'
                exact
                render={props => {
                  return (
                    <Search
                      {...props}
                      isAuthenticated={this.isAuthenticated}
                      userId={this.state.userId}
                    />
                  )
                }}
              />
              <Route
                path='/donor-explorer/register'
                exact
                render={props => (
                  <Register {...props} isAuthenticated={this.isAuthenticated} />
                )}
              />
              <Route
                path='/donor-explorer/saveddonors'
                exact
                render={props => (
                  <SavedDonorsContainer
                    {...props}
                    isAuthenticated={this.isAuthenticated}
                    userId={this.state.userId} />
                )}
              />
              <Route
                path='/donor-explorer/logout'
                exact
                render={props => (
                  <LogOutContainer
                    {...props}
                    logOut={this.logOut} />
                )}
              />
              <Route path='/donor-explorer/*' render={() => <Redirect to='/' />} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
