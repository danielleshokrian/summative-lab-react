import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Shop from '../pages/Shop';
import AdminPortal from '../pages/AdminPortal';

test('navigates between Shop and AdminPortal', () => {
  render(
    <MemoryRouter initialEntries={['/shop']}>
      <Routes>
        <Route path="/shop" element={<Shop coffees={[]} />} />
        <Route path="/admin" element={<AdminPortal coffees={[]} setCoffees={() => {}} />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText(/shop/i)).toBeInTheDocument();

  // Navigate to admin
  render(
    <MemoryRouter initialEntries={['/admin']}>
      <Routes>
        <Route path="/shop" element={<Shop coffees={[]} />} />
        <Route path="/admin" element={<AdminPortal coffees={[]} setCoffees={() => {}} />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText(/admin/i)).toBeInTheDocument();
});
