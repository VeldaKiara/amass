import Types from '../constants/actionTypes'

const baseState = {
    user:{name:'velda'},
    token:null
}


 const reducers = (state=baseState,action) =>{

    switch(action.type){
        case Types.LOGIN:
            return {
                ...state,
                user:action.payload.user,
            }
        case Types.TOKEN:
            return{
                ...state,
                token:action.payload,
            }
        default:
            console.log('other', action.payload)
            return state
    }
    

}


export default reducers