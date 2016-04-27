/**
 * Layouts reducer.
 * @module reducers/layouts
 */

import { ADD_LAYOUT, DELETE_LAYOUT, UPDATE_LAYOUT } from 'constants/ActionTypes';

const initialState = {
  xs: {
    grid: [
      [
        { width: 4, id: '1ffc79e7-5031-4d28-8fc0-f0ddf85d58d8' },
        { width: 8, id: '2ffc79e7-5031-4d28-8fc0-f0ddf85d58d8' },
      ],
      [{ width: 12, id: '3ffc79e7-5031-4d28-8fc0-f0ddf85d58d8' }],
    ],
  },
};

/**
 * Layouts reducer.
 * @function layouts
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export default function consent(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_LAYOUT:
    case DELETE_LAYOUT:
    case UPDATE_LAYOUT:
    default:
      return state;
  }
}
