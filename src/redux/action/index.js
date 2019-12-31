
import type from '../actionType/'


export function login(userinfo){
  return {
    type:type.LOGIN_STATUS,
    userinfo
  }
}