import axios from 'axios';
import { api } from 'routes';

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const REMOVE_ITEM_REQUEST = 'REMOVE_ITEM_REQUEST';
export const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS';
export const REMOVE_ITEM_FAILURE = 'REMOVE_ITEM_FAILURE';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const authenticate = (username, password) => (dispatch) => {
  dispatch({ type: AUTH_REQUEST });
  return axios
    .post(api.login, {
      username,
      password,
    })
    .then((payload) => {
      dispatch({
        type: AUTH_SUCCESS,
        payload,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: AUTH_FAILURE,
      });
    });
};

export const register = (username, password) => (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  return axios
    .post(api.register, {
      username,
      password,
    })
    .then((payload) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload,
      }),
    )
    .catch((error) => {
      console.log(error);
      dispatch({
        type: REGISTER_FAILURE,
      });
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST });
  return axios
    .post(api.logout)
    .then(() =>
      dispatch({
        type: LOGOUT_SUCCESS,
      }),
    )
    .catch((error) => {
      console.log(error);
      dispatch({
        type: LOGOUT_FAILURE,
      });
    });
};

export const fetchItems = (type) => (dispatch, getState) => {
  dispatch({ type: FETCH_REQUEST });
  return axios
    .get(api.pocketsByType, {
      params: {
        type,
        userId: getState().userId,
      },
    })
    .then(({ data }) =>
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          data,
          type,
        },
      }),
    )
    .catch((err) => {
      console.log(err);
      dispatch({
        type: FETCH_FAILURE,
      });
    });
};

export const addItem = (content) => (dispatch, getState) => {
  dispatch({ type: ADD_ITEM_REQUEST });
  return axios
    .post(api.pocket, {
      userId: getState().userId,
      ...content,
    })
    .then(({ data }) =>
      dispatch({
        type: ADD_ITEM_SUCCESS,
        payload: {
          ...data,
        },
      }),
    )
    .catch((err) => {
      console.log(err);
      dispatch({
        type: ADD_ITEM_FAILURE,
      });
    });
};

export const removeItem = (id, type) => (dispatch) => {
  dispatch({ type: REMOVE_ITEM_REQUEST });
  return axios
    .delete(`${api.pocket}${id}`)
    .then(() =>
      dispatch({
        type: REMOVE_ITEM_SUCCESS,
        payload: {
          type,
          id,
        },
      }),
    )
    .catch((err) => {
      console.log(err);
      dispatch({
        type: REMOVE_ITEM_FAILURE,
      });
    });
};
