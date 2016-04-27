/**
 * Grid component.
 * @module components/Grid
 */

import React, { PropTypes } from 'react';

import { Row } from 'components';

/**
 * Grid component class.
 * @function Grid
 * @param {Object} props Component properties.
 * @param {Object[]} props.rows Rows in the grid.
 * @returns {string} Markup of the row.
 */
const Grid = ({ rows }) =>
  <div className="grid">
    {rows.map((row, index) =>
      <Row
        key={index}
        {...row}
      />
    )}
  </div>;

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Grid.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.array),
};

export default Grid;
