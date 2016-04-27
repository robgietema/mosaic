/**
 * Layout container.
 * @module containers/Layout
 */

/* eslint react/prefer-stateless-function: 0 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Grid } from 'components';

@connect(
  state => ({
    tiles: state.tiles,
    layouts: state.layouts,
    selected: state.selected,
  }),
)
/**
 * Layout component class.
 * @class Layout
 * @extends Component
 */
export default class Layout extends Component {

  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    tiles: PropTypes.object.isRequired,
    layouts: PropTypes.object.isRequired,
    selected: PropTypes.string.isRequired,
  };

  /**
   * Render method.
   * @function render
   * @returns {string} Markup of the container.
   */
  render() {
    const { tiles, layouts } = this.props;

    const rows = layouts.xs.grid.map(row =>
      row.map(tile =>
        ({
          id: tile.id,
          width: tile.width,
          content: tiles[tile.id].content,
          selected: tile.id === this.props.selected,
        })
      )
    );

    return <Grid rows={rows} />;
  }
}

export default Layout;
