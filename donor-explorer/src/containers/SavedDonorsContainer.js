import React from 'react'
import {Redirect} from 'react-router'
import SavedDonors from '../components/SavedDonors'

const SavedDonorsContainer = (props) => {
  if (props.isAuthenticated()) {
    return (
      <SavedDonors {...props} />
    )
  } else {
    return (
      <Redirect to='/donor-explorer/login' />
    )
  }
}

export default SavedDonorsContainer
