import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorUI from '../components/calculator';

it('renders correctly', () => {
  const tree = renderer
    .create(<CalculatorUI />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
