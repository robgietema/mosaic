/**
 * Tile component.
 * @module components/Tile
 */

import React, { PropTypes } from 'react';

import styles from './Tile.scss';

/**
 * Tile component class.
 * @function Tile
 * @param {Object} props Component properties.
 * @param {string} props.id Id of the tile.
 * @param {string} props.content Content of the tile.
 * @param {number} props.width Width of the tile.
 * @param {bool} props.selected True if tile is selected.
 * @param {func} props.selectTile Select tile method.
 * @returns {string} Markup of the tile.
 */
const Tile = ({ id, content, width, selected, selectTile }) =>
  <div id={id} className={`${styles.tile} col-xs-${width} ${selected ? styles.selected : ''}`}>
    <div onClick={() => selectTile(id)} className={styles.content}>
      {content}
    </div>
  </div>;

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Tile.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  selectTile: PropTypes.func.isRequired,
};

export default Tile;
