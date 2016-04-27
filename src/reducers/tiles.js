/**
 * Tiles reducer.
 * @module reducers/tiles
 */

import { ADD_TILE, DELETE_TILE, UPDATE_TILE } from 'constants/ActionTypes';

const initialState = {
  1: {
    content: 'Tile 1',
  },
  2: {
    content: 'Tile 2',
  },
  3: {
    content: 'Tile 3',
  },
};

/**
 * Tiles reducer.
 * @function tiles
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export default function consent(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_TILE:
    case DELETE_TILE:
    case UPDATE_TILE:
    default:
      return state;
  }
}
