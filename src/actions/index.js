/**
 * Actions.
 * @module actions
 */

import {
  ADD_TILE,
  DELETE_TILE,
  UPDATE_TILE,
  SELECT_TILE,
  ADD_LAYOUT,
  DELETE_LAYOUT,
  UPDATE_LAYOUT,
} from 'constants/ActionTypes';

/**
 * Add tile action.
 * @function addTile
 * @returns {Object} Add tile action.
 */
export function addTile() {
  return {
    type: ADD_TILE,
  };
}

/**
 * Delete tile action.
 * @function deleteTile
 * @returns {Object} Delete tile action.
 */
export function deleteTile() {
  return {
    type: DELETE_TILE,
  };
}

/**
 * Update tile action.
 * @function updateTile
 * @returns {Object} Update tile action.
 */
export function updateTile() {
  return {
    type: UPDATE_TILE,
  };
}

/**
 * Select tile action.
 * @function updateTile
 * @param {string} id Id of the tile.
 * @returns {Object} Update tile action.
 */
export function selectTile(id) {
  return {
    type: UPDATE_TILE,
    id,
  };
}

/**
 * Add layout action.
 * @function addLayout
 * @returns {Object} Add layout action.
 */
export function addLayout() {
  return {
    type: ADD_LAYOUT,
  };
}

/**
 * Delete layout action.
 * @function deleteLayout
 * @returns {Object} Delete layout action.
 */
export function deleteLayout() {
  return {
    type: DELETE_LAYOUT,
  };
}

/**
 * Update layout action.
 * @function updateLayout
 * @returns {Object} Update layout action.
 */
export function updateLayout() {
  return {
    type: UPDATE_LAYOUT,
  };
}
