import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import NotesReducer from './reducer_notes';
import SubjectsReducer from './reducer_subjects';
import SignedInReducer from './reducer_signed_in';

const rootReducer = combineReducers({
	notes: NotesReducer,
	subjects: SubjectsReducer,
	form: formReducer,
	isSignedIn: SignedInReducer
});

export default rootReducer;
