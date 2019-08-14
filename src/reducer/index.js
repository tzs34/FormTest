
const UPDATE_FORM_STATE = 'UPDATE_FORM_STATE'

const formReducer = (state, action) => {
    switch(action.type) {
      case UPDATE_FORM_STATE: 
        return state
      
      default: return state
    }
  }

  const initialState =  {
    firstName: {value: '', isvalid: true},
    lastName: {value: '', isvalid: true},
    email: {value: '', isvalid: true},
    telephone: {value: '', isvalid: true},
    experience: {value: '', isvalid: true},
    startDate: {value: '', isvalid: true},
}

export {
    initialState,
    formReducer,
    UPDATE_FORM_STATE
}