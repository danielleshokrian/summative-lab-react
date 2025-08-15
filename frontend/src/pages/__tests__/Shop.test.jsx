import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Shop from '../Shop';

const mockCoffees = [
  { id: 1, name: 'Espresso', origin: 'Italy', description: 'Strong coffee', price: 3 },
  { id: 2, name: 'Latte', origin: 'France', description: 'Milky coffee', price: 4 },
];

describe('Shop Page', () => {
  test('renders all coffee cards initially', () => {
    render(<Shop coffees={mockCoffees} />);
    expect(screen.getByText('Espresso')).toBeInTheDocument();
    expect(screen.getByText('Latte')).toBeInTheDocument();
  });

  test('filters coffees by origin', async () => {
    render(<Shop coffees={mockCoffees} />);
    const select = screen.getByRole('combobox');
    await userEvent.selectOptions(select, 'Italy');
    expect(screen.getByText('Espresso')).toBeInTheDocument();
    expect(screen.queryByText('Latte')).not.toBeInTheDocument();
  });

  test('searches coffees by name', async () => {
    render(<Shop coffees={mockCoffees} />);
    const searchInput = screen.getByPlaceholderText('Search by name');
    await userEvent.type(searchInput, 'Latte');
    expect(screen.getByText('Latte')).toBeInTheDocument();
    expect(screen.queryByText('Espresso')).not.toBeInTheDocument();
  });
});
