import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from "react-router-dom";
import { CreatePosition } from './create-position';

test('renders create position component', () => {
  const { getByText } = render(<Router><CreatePosition /></Router>);
  const titleElement = getByText(/title/i);
  expect(titleElement).toBeInTheDocument();
});
