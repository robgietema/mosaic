/**
 * Field component.
 * @module components/Field
 */

import React, { PropTypes } from 'react';

import styles from './Field.scss';

/**
 * Field component class.
 * @function Field
 * @param {Object} props Component properties.
 * @param {Object} props.field Field data.
 * @param {string} props.label Lavel of the field.
 * @param {string} props.type Type of the field.
 * @returns {string} Markup of the field.
 */
const Field = ({ field, label, type }) =>
  <div className={`form-group ${field.error && field.touched ? ' has-error' : ''}`}>
    <label htmlFor={field.name} className="col-sm-2">{label}</label>
    <div className={`col-sm-8 ${styles.inputGroup}`}>
      <input type={type} className="form-control" id={field.name} {...field} />
      {field.error && field.touched && <div className="text-danger">{field.error}</div>}
    </div>
  </div>;

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Field.propTypes = {
  field: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Field;
