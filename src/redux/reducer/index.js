import type from '../actionType'

var session = window.sessionStorage;
// 用户信息
var userinfo = session.getItem('userinfo')?JSON.parse(session.getItem('userinfo')):{ username: '',password: ''};
// token信息
var token = session.getItem('token')?session.getItem('token'):'';

const initialState = {
  userinfo,
  token
}

const Data = (state = initialState, action) => {
  switch (action.type) {
    case type.LOGIN_STATUS:
      return {
        ...state,
        userinfo: action.userinfo
      }
    case type.SET_TOKEN:
      return {
        ...state,
        token: action.token
      }
    default:
      return { ...state };
  }
}
export default Data