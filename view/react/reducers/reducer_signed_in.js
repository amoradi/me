import { SIGN_IN } from '../actions';

export default function(state = false, action) {
	switch (action.type) {
	case SIGN_IN:
		return action.payload.data.token;
	default:
		return state;
	}
}
