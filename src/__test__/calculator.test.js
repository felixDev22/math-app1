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

  test('Addition Result should be 6', () => {
    render(<CalculatorUI />);
    const btn1 = screen.getByRole('button', { name: '1' });
    userEvent.click(btn1);
    const btnOperation = screen.getByRole('button', { name: '+' });
    userEvent.click(btnOperation);
    const btn2 = screen.getByRole('button', { name: '5' });
    userEvent.click(btn2);
    const btnEqualto = screen.getByRole('button', { name: '=' });
    userEvent.click(btnEqualto);
    const result = screen.getByTestId('total_value');
    expect(result.textContent).toBe('6');
  });

  test('Substraction result should be 4', () => {
    render(<CalculatorUI />);
    const btn1 = screen.getByRole('button', { name: '9' });
    userEvent.click(btn1);
    const btnOperation = screen.getByRole('button', { name: '-' });
    userEvent.click(btnOperation);
    const btn2 = screen.getByRole('button', { name: '5' });
    userEvent.click(btn2);
    const btnEqualto = screen.getByRole('button', { name: '=' });
    userEvent.click(btnEqualto);
    const result = screen.getByTestId('total_value');
    expect(result.textContent).toBe('4');
  });

  test('Multiplation result should be 16', () => {
    render(<CalculatorUI />);
    const btn1 = screen.getByRole('button', { name: '4' });
    userEvent.click(btn1);
    const btnOperation = screen.getByRole('button', { name: /x/i });
    userEvent.click(btnOperation);
    const btn2 = screen.getByRole('button', { name: '4' });
    userEvent.click(btn2);
    const btnEqualto = screen.getByRole('button', { name: '=' });
    userEvent.click(btnEqualto);
    const result = screen.getByTestId('total_value');
    expect(result.textContent).toBe('16');
  });

  test('Division result should be 2', () => {
    render(<CalculatorUI />);
    const btn1 = screen.getByRole('button', { name: '2' });
    userEvent.click(btn1);
    userEvent.click(btn1);
    const btnOperation = screen.getByRole('button', { name: /÷/i });
    userEvent.click(btnOperation);
    const btn2 = screen.getByRole('button', { name: '1' });
    userEvent.click(btn2);
    userEvent.click(btn2);
    const btnEqualto = screen.getByRole('button', { name: '=' });
    userEvent.click(btnEqualto);
    const result = screen.getByTestId('total_value');
    expect(result.textContent).toBe('2');
  });
});
