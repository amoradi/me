import { FETCH_NOTES, FETCH_NOTE, DELETE_NOTE, FETCH_SEARCHED_NOTES } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
	switch (action.type) {
	case FETCH_NOTES:
		return _.mapKeys(action.payload.data, 'slug');
	case FETCH_NOTE:
		return _.mapKeys([action.payload.data], 'slug');
	case FETCH_SEARCHED_NOTES:
		return _.mapKeys(action.payload.data, 'slug');
	case DELETE_NOTE:
		return state;
	default:
		return state;
	}
}
