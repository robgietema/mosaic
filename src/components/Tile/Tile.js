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
 * @param {string} props.content Content of the tile.
 * @param {number} props.width Width of the tile.
 * @returns {string} Markup of the tile.
 */
const Tile = ({ content, width }) =>
  <div className={`${styles.tile} col-xs-${width}`}>
    <div className={styles.content}>
      {content}
    </div>
  </div>;

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Tile.propTypes = {
  content: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default Tile;
