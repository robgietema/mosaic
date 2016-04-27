/**
 * Layouts reducer.
 * @module reducers/layouts
 */

import { ADD_LAYOUT, DELETE_LAYOUT, UPDATE_LAYOUT } from 'constants/ActionTypes';

/**
 * Layouts reducer.
 * @function layouts
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export default function consent(state = [], action = {}) {
  switch (action.type) {
    case ADD_LAYOUT:
    case DELETE_LAYOUT:
    case UPDATE_LAYOUT:
    default:
      return state;
  }
}
