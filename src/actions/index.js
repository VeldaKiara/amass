import Types from '../constants/actionTypes'

export const ActionCreators = {
    setToken:(token)=>({type:Types.TOKEN,payload:token}),
    setUser:(user)=>({type:Types.LOGIN,payload:user}),

}