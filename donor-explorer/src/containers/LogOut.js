import React from 'react'
// import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

// import {logOut} from '../actions/auth'
// import {authErrors, isAuthenticated} from '../reducers/index'

const LogOut = (props) => {
  if (!props.isAuthenticated()) {
    return (
      <Redirect to='/' />
    )
  } else {
    return (
      <Redirect to='/' />
    )
  }
}

// const mapStateToProps = (state) => ({
//   errors: authErrors(state),
//   isAuthenticated: isAuthenticated(state)
// })

// const mapDispatchToProps = (dispatch) => ({
//   logOut: () => {
//     dispatch(logOut())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(LogOut)

export default LogOut
