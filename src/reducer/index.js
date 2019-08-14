const UPDATE_FORM_STATE = "UPDATE_FORM_STATE";
const FILE_UPLOAD_STATUS = "FILE_UPLOAD_STATUS";

const formReducer = (state, { type, payload }) => {
  switch (type) {
    case UPDATE_FORM_STATE:
      return { ...state, ...payload };
    case FILE_UPLOAD_STATUS:
      return { ...state, ...payload };
    default:
      return state;
  }
};

const initialState = {
  firstName: { value: "", isvalid: true },
  lastName: { value: "", isvalid: true },
  email: { value: "", isvalid: true },
  telephone: { value: "", isvalid: true },
  experience: { value: "", isvalid: true },
  startDate: { value: "", isvalid: true }
};

export { initialState, formReducer, UPDATE_FORM_STATE, FILE_UPLOAD_STATUS };
