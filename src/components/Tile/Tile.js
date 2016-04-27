/**
 * Tile component.
 * @module components/Tile
 */

import React, { PropTypes } from 'react';

/**
 * Tile component class.
 * @function Tile
 * @param {Object} props Component properties.
 * @param {string} props.content Content of the tile.
 * @param {number} props.width Width of the tile.
 * @returns {string} Markup of the tile.
 */
const Tile = ({ content, width }) =>
  <div className={`tile col-xs-${width}`}>
    {content}
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
