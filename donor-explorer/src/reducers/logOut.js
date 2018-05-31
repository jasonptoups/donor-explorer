import * as auth from '../actions/auth'

const initialState = null

export default function logOutReducer (state = initialState, action) {
  switch (action.type) {
    case auth.LOGOUT:
      return {
        ...state,
        access: undefined,
        refresh: undefined,
        errors: {}
      }
    default:
      return state
  }
}
