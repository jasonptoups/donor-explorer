import React from 'react'
import {Redirect} from 'react-router-dom'

const LogOutContainer = (props) => {
  props.logOut()
  return (
    <Redirect to='/' />
  )
}

export default LogOutContainer
