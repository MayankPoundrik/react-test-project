import { SET_NAME, SET_AGE } from "../constants";

export default function appRed(state = [], action) {
	switch (action.type) {
		case SET_NAME:
			return {
				...state,
				firstName: action.text,
			};
		case SET_AGE:
			return {
				...state,
				age: action.text,
			};
		default:
			return state;
	}
}
