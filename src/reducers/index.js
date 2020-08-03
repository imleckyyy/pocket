import {
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  REMOVE_ITEM_REQUEST,
  REMOVE_ITEM_SUCCESS,
  REMOVE_ITEM_FAILURE,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from 'actions';

const initialState = {
  userId: localStorage.getItem('userId'),
  isLoading: false,
  videos: [],
  articles: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case AUTH_SUCCESS: {
      localStorage.setItem('userId', payload.data._id);
      return {
        ...state,
        userId: payload.data._id,
        isLoading: false,
      };
    }
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        userId: payload.data._id,
        isLoading: false,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case LOGOUT_SUCCESS: {
      localStorage.removeItem('userId');
      return {
        ...state,
        userId: null,
        isLoading: false,
      };
    }
    case ADD_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_ITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        [payload.type]: [...state[payload.type], payload],
      };
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        [payload.type]: [...payload.data],
      };
    case REMOVE_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REMOVE_ITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        [payload.type]: [...state[payload.type].filter((item) => item._id !== payload.id)],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
