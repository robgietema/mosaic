/**
 * Selected reducer.
 * @module reducers/selected
 */

import { SELECT_TILE } from 'constants/ActionTypes';

const initialState = '1ffc79e7-5031-4d28-8fc0-f0ddf85d58d8';

/**
 * Selected reducer.
 * @function selected
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export default function selected(state = initialState, action = {}) {
  console.log('ACTION: ', action);
  switch (action.type) {
    case SELECT_TILE:
      console.log('TYPE: ', action.type);
      return action.tile;
    default:
      return state;
  }
}
