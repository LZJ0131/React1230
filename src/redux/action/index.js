
import type from '../actionType/'


export function login(userinfo){
  return {
    type:type.LOGIN_STATUS,
    userinfo
  }
}
export function settoken(token){
  return {
    type:type.SET_TOKEN,
    token
  }
}