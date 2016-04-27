/**
 * Row component.
 * @module components/Row
 */

import React, { PropTypes } from 'react';

import { Tile } from 'components';

/**
 * Row component class.
 * @function Row
 * @param {Object} props Component properties.
 * @param {Object[]} props.tiles Tiles in the row.
 * @returns {string} Markup of the row.
 */
const Row = ({ tiles }) =>
  <div className="row">
    {tiles.map((tile, index) =>
      <Tile
        key={index}
        {...tile}
      />
    )}
  </div>;

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Row.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.object),
};

export default Row;
