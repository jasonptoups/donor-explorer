import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'

import LoginForm from '../components/LoginForm2'
import {login} from '../actions/auth'
import {authErrors, isAuthenticated} from '../reducers/index'

const Login = (props) => {
  if (props.isAuthenticated) {
    return (
      <Redirect to='/' />
    )
  } else {
    return (
      <div>
        <LoginForm {...props} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  errors: authErrors(state),
  isAuthenticated: isAuthenticated(state),
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (username, password) => {
    dispatch(login(username, password))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
