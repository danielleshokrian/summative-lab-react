import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddCoffeeForm from '../AddCoffeeForm';

describe('AddCoffeeForm', () => {
  test('calls setCoffees on form submission', async () => {
    const mockSetCoffees = vi.fn();
    render(<AddCoffeeForm coffees={[]} setCoffees={mockSetCoffees} />);

    await userEvent.type(screen.getByLabelText(/name/i), 'Cappuccino');
    await userEvent.type(screen.getByLabelText(/origin/i), 'Italy');
    await userEvent.type(screen.getByLabelText(/description/i), 'Frothy coffee');
    await userEvent.type(screen.getByLabelText(/price/i), '5');

    await userEvent.click(screen.getByRole('button', { name: /add coffee/i }));

    expect(mockSetCoffees).toHaveBeenCalled();
    const addedCoffee = mockSetCoffees.mock.calls[0][0];
    expect(addedCoffee.some(c => c.name === 'Cappuccino')).toBe(true);
  });
});
