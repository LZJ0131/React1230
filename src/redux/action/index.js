
import type from '../actionType/'


export function login(Login){
  return {
    type:type.LOGIN_STATUS,
    Login
  }
}