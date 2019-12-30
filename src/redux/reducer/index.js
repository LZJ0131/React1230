import  type  from '../actionType'

const initialState = {
  login_status: 'lizini'
}

const Data = (state = initialState, action) => {
  switch (action.type) {
    case type.LOGIN_STATUS:
      return {
        ...state,
        login_status: action.Login
      }
    default:
      return { ...state };
  }
}
export default Data