/**
 * Layout container.
 * @module containers/Layout
 */

/* eslint react/prefer-stateless-function: 0 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectTile } from 'actions';
import { Grid } from 'components';

@connect(
  state => ({
    tiles: state.tiles,
    layouts: state.layouts,
    selected: state.selected,
  }),
  dispatch => bindActionCreators({ selectTile }, dispatch),
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
    selectTile: PropTypes.func.isRequired,
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

    return <Grid rows={rows} selectTile={this.props.selectTile} />;
  }
}

export default Layout;
