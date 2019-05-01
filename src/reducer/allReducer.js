const initialState = {
   user: {},
   matches: [],
   pet: {}
  }

const reducer = (state = initialState, action) => {
  switch(action.type){
    case('LOGIN_USER'): {
      return {...state, user: action.payload}
    }
      break;
    case('USERS_PICK'): {
        return {...state, matches: action.payload}
    }
      break;
    case('EDITTING_PET'): {
        return {...state, pet: action.payload}
    }
      break;
    default:
    return state
  }
}

export default reducer
