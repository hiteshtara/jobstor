import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from "react-router-dom";
import { Layout } from './layout';

test('renders layout component', () => {
  const { getByText } = render(<Router><Layout /></Router>);
  const homeElement = getByText(/home/i);
  expect(homeElement).toBeInTheDocument();
});
