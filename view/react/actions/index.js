import axios from 'axios';

export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCH_SEARCHED_NOTES = 'FETCH_SEARCHED_NOTES';
export const FETCH_NOTE = 'FETCH_NOTE';
export const FETCH_SUBJECTS = 'FETCH_SUBJECTS';
export const CREATE_NOTE = 'CREATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const SIGNED_IN = 'SIGNED_IN';

export function fetchNotes() {
  const request = axios.get('/api/notes');

  return {
    type: FETCH_NOTES,
    payload: request
  }
}

export function fetchSearchedNotes(term) {
  const request = axios.get(`/api/notes/search/${term}`);

  return {
    type: FETCH_SEARCHED_NOTES,
    payload: request
  }
}

export function fetchNote(slug) {
  const request = axios.get('/api/notes/slug/' + slug);

  return {
    type: FETCH_NOTE,
    payload: request
  }
}

export function fetchSubjects() {
  const request = axios.get('/api/subjects');

  return {
    type: FETCH_SUBJECTS,
    payload: request
  }
}

export function createNote(values, callback) {
  const request = axios({
      method: 'post',
      url: '/api/notes/',
      data: values,
      headers: { Authorization: "Bearer " + window.localStorage["amoradi-notes-token"]}
    })
    .then(() => callback());

  return {
    type: CREATE_NOTE,
    payload: request
  }
}

export function deleteNote(id, callback) {
  const request = axios({
      method: 'delete',
      url: '/api/notes/' + id,
      headers: { Authorization: "Bearer " + window.localStorage["amoradi-notes-token"]}
    })
    .then(() => callback());

  return {
    type: DELETE_NOTE,
    payload: request
  }
}

export function editNote(id, values, callback) {
  const request = axios({
      method: 'put',
      url: '/api/notes/' + id,
      data: values,
      headers: { Authorization: "Bearer " + window.localStorage["amoradi-notes-token"]}
    })
    .then(() => callback());

  return {
    type: EDIT_NOTE,
    payload: request
  }
}

export function signIn(values, callback) {
  const request = axios.post('/auth/signin', values)
    .then((resp) => {
      window.localStorage.setItem('amoradi-notes-token', resp.data.token);
      callback();
    });

  return {
    type: SIGNED_IN,
    payload: request
  }
}

