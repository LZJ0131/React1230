import  type  from '../actionType'

const initialState = {
  title:'记录'
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