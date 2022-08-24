
import { LOADER_DISPLAY_ON, LOADER_DISPLAY_OF, ERROR_DISPLAY_ON, ERROR_DISPLAY_OF } from "./types";

const initialState = {
	loader: false,
	error: null
}

export const appReducer = (state = initialState, action) => {
	// console.log('input text Reducer >', action);
	switch(action.type) {

		case LOADER_DISPLAY_ON:
			return {
				...state, 
				loader: true
			}

			case ERROR_DISPLAY_ON:
			return {
				...state, 
				error: action.text
			}

			case ERROR_DISPLAY_OF:
				return {
					...state, 
					error: null
				}

			case LOADER_DISPLAY_OF:
				return {
					...state, 
					loader: false
				}

		default: 
			return state;
	}

}