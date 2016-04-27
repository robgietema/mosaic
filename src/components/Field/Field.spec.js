import { expect } from 'chai';
import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { wrap } from 'react-stateless-wrapper';

import { Field as FieldFunction } from 'components';

const Field = wrap(FieldFunction);

describe('Field component', () => {
  it('should render a text field', () => {
    const renderer = renderIntoDocument(
      <Field field={{ name: 'Name' }} label="Label" type="text" />
    );
    const dom = ReactDOM.findDOMNode(renderer);
    const label = dom.getElementsByTagName('label')[0];
    const input = dom.getElementsByTagName('input')[0];

    expect(label.textContent).to.equal('Label');
    expect(label.getAttribute('for')).to.equal('Name');
    expect(input.getAttribute('type')).to.equal('text');
    expect(input.getAttribute('id')).to.equal('Name');
  });

  it('should render a password field', () => {
    const renderer = renderIntoDocument(
      <Field field={{ name: 'Name' }} label="Label" type="password" />
    );
    const dom = ReactDOM.findDOMNode(renderer);
    const label = dom.getElementsByTagName('label')[0];
    const input = dom.getElementsByTagName('input')[0];

    expect(label.textContent).to.equal('Label');
    expect(label.getAttribute('for')).to.equal('Name');
    expect(input.getAttribute('type')).to.equal('password');
    expect(input.getAttribute('id')).to.equal('Name');
  });

  it('should display an error when the field is touched', () => {
    const renderer = renderIntoDocument(
      <Field field={{ name: 'Name', error: 'Error', touched: true }} label="Label" type="text" />
    );
    const dom = ReactDOM.findDOMNode(renderer);
    const error = dom.getElementsByClassName('text-danger')[0];

    expect(error.textContent).to.equal('Error');
  });

  it('shouldn\'t display an error when the field is not touched', () => {
    const renderer = renderIntoDocument(
      <Field field={{ name: 'Name', error: 'Error', touched: false }} label="Label" type="text" />
    );
    const dom = ReactDOM.findDOMNode(renderer);
    const error = dom.getElementsByClassName('text-danger');

    expect(error.length).to.equal(0);
  });
});
