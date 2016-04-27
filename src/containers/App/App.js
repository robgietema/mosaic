/**
 * App container.
 * @module containers/App
 */

import React, { PropTypes } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { routeActions } from 'react-router-redux';

import config from 'config';
import logo from './logo.png';

/**
 * This class defines the app container.
 * @function App
 * @param {Object} props Component properties.
 * @param {Object} props.children Child nodes.
 * @returns {string} Markup for the component.
 */
const App = ({ children }) =>
  <div>
    <Helmet { ...config.app.head } />
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <IndexLink to="/" activeStyle={ { color: '#33e0ff' } }>
            <img src={logo} height="25" />
          </IndexLink>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
    </Navbar>

    <div>
      {children}
    </div>
  </div>;

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default connect(
  () => ({}),
  { pushState: routeActions.push }
)(App);
