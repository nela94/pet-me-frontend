const initialState = {
   user: {},
   matches: [],
   pet: []
  }

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'LOGIN_USER': {
      return {...state, user: action.payload}
    }
    case('USERS_PICK'): {
        return {...state, matches: action.payload}
    }
    case('EDITTING_PET'): {
        return {...state, pet: action.payload}
    }
    default:
    return state
  }
}

export default reducer
