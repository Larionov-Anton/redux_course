
import { 
	INCREMENT, 
	DECREMENT, 
	INPUT_TEXT, 
	COMMENT_CREATE,
	COMMENT_UPDATE,
	COMMENT_DELETE,
	COMMENTS_LOAD,
	LOADER_DISPLAY_OF,
	LOADER_DISPLAY_ON,
	ERROR_DISPLAY_ON,
	ERROR_DISPLAY_OF
	} from "./types";


export function incrementLikes() {
	return {
		type: INCREMENT
	}
}

export function decrementLikes() {
	return {
		type: DECREMENT
	}
}

export function inputText(text) {
	return {
		type: INPUT_TEXT,
		text
	}
}

export function commentCreate(text, id) {
	return {
		type: COMMENT_CREATE,
		data: { text, id }
	}
}

export function commentUpdate(text, id) {
	return {
		type: COMMENT_UPDATE,
		data: { text, id }
	}
}

export function commentDelete(id) {
	return {
		type: COMMENT_DELETE,
		id
	}
}

export function loaderOn(id) {
	return {
		type: LOADER_DISPLAY_ON,
	}
}

export function loaderOf(id) {
	return {
		type: LOADER_DISPLAY_OF,
	}
}

export function errorOn(text) {
	return dispatch => {
		dispatch({
			type: ERROR_DISPLAY_ON,
			text
		});

		setTimeout(() => {
			dispatch(errorOf());
		}, 2000)
	}

}

export function errorOf() {
	return {
		type: ERROR_DISPLAY_OF,
	}
}

export function commentsLoad() {
	return async dispatch => {
		try {
			dispatch(loaderOn());
		const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
		const jsonData = await response.json();
		dispatch({
			type: COMMENTS_LOAD,
			data: jsonData
		})
		dispatch(loaderOf());
		} catch(err) {
			dispatch(errorOn(err.message));
			dispatch(loaderOf());
		}
	}
}






