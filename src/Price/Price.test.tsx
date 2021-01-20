import React from 'react';
import { render, screen } from '@testing-library/react';
import Price from './Price';

test('renders learn react link', () => {
  render(<Price />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
