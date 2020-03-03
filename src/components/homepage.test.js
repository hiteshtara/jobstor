import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from "react-router-dom";
import { Homepage } from './homepage';

test('renders homepage component', () => {
  const { getByText } = render(<Router><Homepage /></Router>);
  const positionsElement = getByText(/Positions/i);
  expect(positionsElement).toBeInTheDocument();
});
