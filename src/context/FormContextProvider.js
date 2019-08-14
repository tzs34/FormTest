import React, { createContext, useReducer } from "react";
import { formReducer, initialState } from "../reducer";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
	const [state, dispatch] = useReducer(formReducer, initialState);
	return (
		<FormContext.Provider value={{ state, dispatch }}>
			{children}
		</FormContext.Provider>
	);
};

export default FormProvider;
