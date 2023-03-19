import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('dummy test', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/application/i);
  for (const item of linkElement) {
    expect(item).toBeInTheDocument();
  }
});
