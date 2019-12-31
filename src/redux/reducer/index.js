import  type  from '../actionType'

const initialState = {
  title:'记录',
  userinfo:{
    username:'',
    password:''
  }
}

const Data = (state = initialState, action) => {
  switch (action.type) {
    case type.LOGIN_STATUS:
      return {
        ...state,
        userinfo: action.userinfo
      }
    default:
      return { ...state };
  }
}
export default Data