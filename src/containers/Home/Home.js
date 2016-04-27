/**
 * Home container.
 * @module components/Home
 */

import React from 'react';
import Helmet from 'react-helmet';

import config from 'config';
import styles from './Home.scss';

/**
 * Home component.
 * @function Home
 * @returns {string} Markup of the not found page.
 */
const Home = () =>
  <div id="page-home" className={styles.home}>
    <Helmet title="Home" />
    <div className="container">
      <h1>{config.app.title}</h1>
      <h2>{config.app.description}</h2>
    </div>
  </div>;

export default Home;