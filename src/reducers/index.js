/**
 * Root reducer.
 * @module reducers/root
 */

import { routeReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';
import { reducer as form } from 'redux-form';

import tiles from 'reducers/tiles';
import layouts from 'reducers/layouts';
import selected from 'reducers/selected';

/**
 * Root reducer.
 * @function
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export default combineReducers({
  routing: routeReducer,
  reduxAsyncConnect,
  form,
  tiles,
  layouts,
  selected,
});
