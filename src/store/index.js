import { createStore, applyMiddleware, compose } from 'redux'; // Importujemy applyMiddleware
import thunk from 'redux-thunk'; // Importujemy redux-thunk
import reducer from 'reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer /* preloadedState, */,
  compose(
    applyMiddleware(thunk), // wykonujemy applyMiddleware z thunk
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
/* eslint-enable */

export default store;
