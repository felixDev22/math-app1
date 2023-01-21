import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import CalculatorUI from '../components/calculator';

describe('testing calculator component with user interaction', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CalculatorUI />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should calculate the value', () => {
    render(<CalculatorUI />);
    const btn1 = screen.getByRole('button', { name: /1/i });
    userEvent.click(btn1);
    const btnOperation = screen.getByRole('button', { name: /+/i });
    userEvent.click(btnOperation);
    const btn2 = screen.getByRole('button', { name: /5/i });
    userEvent.click(btn2);
    const btnEqualto = screen.getByRole('button', { name: /=/i });
    userEvent.click(btnEqualto);
    const result = screen.getByTestId('total_value');
    expect(result.testContent).toBe('6');
  });
});
